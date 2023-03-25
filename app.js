let precioItem;
let cant;
let total = 0;
let seguir;


do{
precioItem = parseFloat(prompt("Ingrese el precio"));

if(precioItem<0){
    precioItem = prompt("Ingrese valor válido");
    }

cant = parseInt(prompt("Cantidad:"));



if(cant<0){
    cant = prompt("Ingrese valor válido");
    }

seguir = prompt("Desea agregar otro Item? s/n");



total = total + (precioItem*cant);

}while(seguir =='s');

alert(`El total a pagar es: $ ${total}`);

