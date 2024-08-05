
import fs from 'fs';

for(let i = 1; i < 1000; i++){
    let numbers = `${i}\n`;
    fs.appendFile('./numeros.txt', numbers, (error) => {
        if(error) throw error;
    })
}