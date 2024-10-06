console.log('Ejercicio 3')

function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1
            console.log(random)
            if (random % 2 === 0) {
                resolve('Consulta exitosa')
            } else {
                reject('Error en la consulta')
            }
        }, 3000)
    })
}

async function ejecutarConsulta() {
    try {
        const mensaje = await consultarBaseDeDatos()
        console.log(mensaje)
    } catch (error) {
        console.error(error)
    }
}

ejecutarConsulta()