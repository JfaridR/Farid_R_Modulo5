
import express from 'express';
import dotenv from 'dotenv'
import fs from 'fs'
import { error } from 'console';

dotenv.config()
const app = express();
const port = 3002;

app.use(express.json());
const baseDeDatos = process.env.BASE_DE_DATOS

console.log('Base de datos:', baseDeDatos);

const students = JSON.parse(fs.readFileSync(baseDeDatos));

app.use((req, res, next) => {
    console.log(
        `New Request: ${req.method} | ${req.originalUrl} | ${new Date().toISOString()}`
    )
    next();
})

app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'Query executed successfully',
        data: JSON.stringify(students)
    })
})

app.get('/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student) {
        res.send('Student not found')
    }
    res.send({
        status: 200,
        message: 'Query executed successfully',
        data: JSON.stringify(student)
    })
})

app.post('/', (req, res) => {
    console.log(req.body)
    students.push({
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        major: req.body.major
    })
    res.json({
        status: 200,
        message: 'Book created successfully',
        data: req.body
    })
    fs.writeFileSync(baseDeDatos, JSON.stringify(students), (error) => {
        if(error) throw error
        console.log('File updated successfully')
    })
})

app.put('/:id', (req, res) => {
    const studentIndex = students.findIndex((student) => student.id === parseInt(req.params.id));
    if(studentIndex === -1) {
        res.status(404)
        res.send({
            status: 404,
            message: 'Student not found'
        })
    }
    students[studentIndex].id = req.params.id
    students[studentIndex] = req.body

    res.send({
        status: 200,
        message: 'Query executed successfully',
        data: req.body
    })
    fs.writeFileSync(baseDeDatos, JSON.stringify(students), (error) => {
        if(error) throw error
        console.log('File updated successfully')
    })
})

app.delete('/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student) {
        res.send('Student not found')
    }
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send({
        status: 200,
        message: 'Query executed successfully',
        data: JSON.stringify(student)
    })
    fs.writeFileSync(baseDeDatos, JSON.stringify(students), (error) => {
        if(error) throw error
        console.log('File updated successfully')
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
