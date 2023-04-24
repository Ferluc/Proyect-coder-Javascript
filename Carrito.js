let carrito = [];

function altaItems(){
    const nuevoItem = new nuevoItem();
    nuevoItem.nombre = prompt('Ingrese nombre del producto');
    nuevoItem.piezas = Number(prompt('Ingrese Cantidad de Piezas'));
    nuevoItem.marca = prompt('Ingrese marca del producto');
    nuevoItem.nivel = prompt('Ingrese nivel de dificultad del producto');
    nuevoItem.precio = Number(prompt('Ingrese precio del producto'));
 
    carrito.push(nuevoItem);

}

const cargaItems = () => {
    let seguir;
    do{
        altaItems();
        seguir = prompt('Desea ingresar otro item? si/no');

    }while (seguir == 'si');
}