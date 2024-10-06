console.log("Ejercicio 5")

const tareas = []

function agregarTarea(descripcion) {
    tareas.push({ descripcion, completada: false })
}

function marcarTareaComoCompletada(descripcion) {
    const tarea = tareas.find((tarea) => tarea.descripcion === descripcion)
    tarea.completada = true
}

function listarTareasPendientes() {
    const pendientes = tareas.filter((tarea) => tarea.completada === false)
    console.log("Tareas pendientes: ", pendientes.map((tarea) => tarea.descripcion))
}

function listarTareasCompletadas() {
    const completadas = tareas.filter((tarea) => tarea.completada === true)
    console.log("Tareas completadas: ", completadas.map((tarea) => tarea.descripcion))
}

agregarTarea("Comprar leche")
agregarTarea("Llamar al médico")
agregarTarea("Estudiar JavaScript")

marcarTareaComoCompletada("Comprar leche")

listarTareasPendientes()
listarTareasCompletadas()