
import fs from 'fs';

console.log(process.argv);

const argumentos = process.argv.slice(2);

console.log("Primer número ingresado: " + argumentos[0]);
console.log("Segundo número ingresado: " + argumentos[2]);
console.log("Operación ingresada: " + argumentos[1]);

const calculadora = function(num1, num2, operacion){
    var x = parseInt(num1);
    var y = parseInt(num2);
    var op = operacion;

    if (op === "+"){
        return x + y;
    } else if (op === "-"){
        return x - y;
    } else if (op === "x"){
        return x * y;
    } else if (op === "/" && y != 0){
        return x / y;
    } else {
        console.log("Por favor revisar los argumentos ingresados");
    }
}

var resultado = calculadora(argumentos[0], argumentos[2], argumentos[1]);

console.log("El resultado de la operación ingresada es: " + resultado);