
import http from 'http'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()
const port = 3002;
const basededatos = process.env.BASE_DE_DATOS

console.log('Base de datos:', basededatos);

const products = JSON.parse(fs.readFileSync(basededatos));

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const id = req.url.split('/')[1];
    console.log('---------');
    console.log(req.url);
    switch (req.url) {
        case '/':
            res.end(JSON.stringify(products));
            break;
        case `/${id}`:
            const result = products.find(product => product.id === parseInt(id));
            if(!result){
                res.end('Producto no encontrado');
            }
            res.end(JSON.stringify(result));
            break;
        default:
            res.writeHead(404)
            res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }

});


/*const products =  [
{ id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
{ id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
{ id: 3, name: 'Pen', price: 1.99, category: 'Stationery' },
{ id: 4, name: 'Pencil', price: 0.99, category: 'Stationery' },
{ id: 5, name: 'Book', price: 9.99, category: 'Stationery' },
{ id: 6, name: 'Mobile', price: 999.99, category: 'Electronics' },
{ id: 7, name: 'Table', price: 999.99, category: 'Furniture' },
];
*/

server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});

