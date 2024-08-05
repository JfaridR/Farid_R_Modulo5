

import fs from 'fs';

fs.readFile('./numeros.txt', (error, data) => {
    if(error) throw error;
    else {
        let num = data.map(Number)
        //console.log(num.toString());
        let pares = num.filter(n => n%2 === 0)
        console.log(pares.toString());
    }

})