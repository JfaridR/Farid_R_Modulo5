
const esperarSegundos = (segundos) => {
    console.log('Mensaje de bienvenida');
    setTimeout(() => {
        console.log('Tiempo cumplido, mensaje entregado');
    }, segundos)
}

export default esperarSegundos;