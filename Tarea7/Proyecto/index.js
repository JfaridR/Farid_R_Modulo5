
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
