
let items = [];

items.push(new rompecabezas("Capri","Clementoni","1000 piezas",8.890));
items.push(new rompecabezas("Las Vegas","Clementoni","1000 piezas",10.490));
items.push(new rompecabezas("Leonardo","Clementoni","1000 piezas", 7.250));
items.push(new rompecabezas("Manhattan","Clementoni","1000 piezas",8.890));
items.push(new rompecabezas("Tower Bridge","Clementoni","1000 piezas",8.890))

console.log(items);

var valorbusqueda = prompt("Ingrese el nombre del producto buscado:");

const busqueda = items.find(prod => {return prod.nombre === valorbusqueda});

console.log(busqueda);
