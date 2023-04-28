let carrito = [];
const btncargar = document.getElementById('Capri');
btncargar.addEventListener('click',altaItems);


function altaItems(){
    const nuevoItem = new Item();
    nuevoItem.nombre = prompt('Ingrese nombre del producto');
    nuevoItem.piezas = Number(prompt('Ingrese Cantidad de Piezas'));
    nuevoItem.marca = prompt('Ingrese marca del producto');
    nuevoItem.nivel = prompt('Ingrese nivel de dificultad del producto');
    nuevoItem.precio = Number(prompt('Ingrese precio del producto'));
 
    carrito.push(nuevoItem);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    mostrarItemsCarrito();
}

function mostrarCarrito() {
    const tabla = document.getElementById('items');
    tabla.innerHTML = '';
    let counter = 1;

    carrito.forEach((item) => {
        tabla.innerHTML +=`
        <tr id='tablita'>
            <th>${counter}</th>
            <td>${item.nombre}</td>
            <td>${item.piezas}</td>
            <td>${item.marca}</td>
            <td>${item.nivel}</td>
            <td>${item.precio}</td>
            </tr>
            `;
    counter++;
console.log(tabla.innerHTML);
 });

}
