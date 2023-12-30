//Declaración de array de articulos
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
]

//Método Filter
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <=500
})

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});