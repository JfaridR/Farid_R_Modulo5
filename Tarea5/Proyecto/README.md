

# Mi primera calculadora con NodeJS

Esta primera versión de calculadora está basada en el uso del arreglo argv que permite capturar
argumentos desde la consola utilizando NodeJS.

El proyecto tiene como base el archivo calculadora.js el cual contiene todo el desarrollo de backend
necesario para utilizar la calculadora al interactuar desde la consola.

Para ejecutar esta calculadora, se puede utilizar la herramienta nodemon de tal manera que al ingresar
los respectivos argumentos desde la consola el resultado se presente de manera inmediata sin necesidad 
de ejecutar nuevamente el archivo .js principal (para este caso calculadora.js).

Sin embargo, para esta primera versión, al utilizar el array ya mencionado, los argumentos ingresados 
son capturados junto con la ejecución del script calculadora.js.

A continuación, se muestra un ejemplo del uso de esta aplicación.

1. Garantizar la instalación de node en la máquina donde se quiera correr la prueba
2. Se debe inicializar el proyecto de NodeJS de manera local.
3. Copiar y pegar el archivo calculadora.js dentro de la carpeta donde se creó el proyecto de NodeJS.
4. Modificar el archivo package.json resultante y garantizar que el archivo main sea el que se copió previamente.
5. Luego de tener los archivos necesarios, ya se puede iniciar la interacción con la calculadora, 
a continuación se muestra un ejemplo de ejecución.

### Ejemplo de ejecución de la calculadora

1. Ubicar la consola en la carpeta donde se tiene alojado el proyecto de NodeJS.
2. Ejecutar el comando: "node calculadora. js num1 operación num2".

    2.1 Para este ejemplo, el valor de "num1" será el primer número que se quiere considerar para esta operación
(recordar que el orden de los números ingesados afecta el resultado según la operación ingresada).

    2.2 el argumento "operación", indica el nombre de la operación que se quiere realizar entre los dos números a ingresar. Para esta aplicación se tienen disponibles las siguientes operaciones junto con los respectivos símbolos que deben ser ingresados según sea el caso:
* Suma --> se debe ingresar el símnolo +
* Resta --> se debe ingresar el símnolo -
* Multiplicación --> se debe ingresar la letra x
* División --> se debe ingresar el símnolo /

    2.3 Finalmente, se debe ingresar el valor del número "num2" que será el segundo número con el cual 
    se quiere hacer la operación. Recordar que para este versión de calculadora, los números que se ingresan deben ser enteros, de momento esta versión no permite la operación de dos o más números decimales.

3. Recordar que para garantizar un buen resultado de la operación, los argumentos deben ir separados por un espacio sencillo, por favor revisar el ejemplo mostrado a continuación:

- node calculadora.js 5 - 10

`Resultado obtenido:`

Primer número ingresado: 5

Segundo número ingresado: 10

Operación ingresada: -

El resultado de la operación ingresada es: -5

`Recomendación adicional:` 

En general, la calculadora está diseñada para operar solamente dos números enteros positivos, para el caso de la divisón, recordar que el valor de "num2" debe ser mayor a cero, de los contrario se generará un error de revisión de argumentos ingresados.