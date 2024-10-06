console.log('Ejercicio 4')

const productos = [
    { nombre: "Televisor", precio: 500, categoria: "Electrónica" },
    { nombre: "Silla", precio: 100, categoria: "Muebles" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mesa", precio: 200, categoria: "Muebles" },
    { nombre: "Auriculares", precio: 150, categoria: "Electrónica" }
   ];

const categoria = productos.filter((cat) => cat.categoria === "Electrónica")
console.log(categoria)

const nombres = categoria.map((nmb) => nmb.nombre)
console.log(nombres)

const precio = categoria.reduce((tot, prc) => tot + prc.precio, 0)
console.log(precio)
