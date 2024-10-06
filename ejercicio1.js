console.log('Ejercicio 1')
async function obtenerUsuarios() {
    try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!respuesta.ok) {
        throw new Error('Error al obtener los usuarios')
    }
    const usuarios = await respuesta.json()
    usuarios.forEach(usuario => {
        console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`)
    });
    }
    catch (error) {
    console.error('Error: ', error)
    }
}

obtenerUsuarios()
