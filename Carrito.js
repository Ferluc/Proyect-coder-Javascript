let carrito = [];

/* const items = [new Rompecabezas("Capri","Capri","Clementoni","1000 piezas",8.890),
new Rompecabezas("lasvegas","Las Vegas","Clementoni","1000 piezas",10.490),
new Rompecabezas("leonardo","Leonardo","Clementoni","1000 piezas", 7.250),
new Rompecabezas("manhattan","Manhattan","Clementoni","1000 piezas",8.890),
new Rompecabezas("towerbridge","Tower Bridge","Clementoni","1000 piezas",8.890),]

const botonCapri = document.getElementById("Capri");
const botonVegas = document.getElementById("lasvegas");
const botonLeonardo = document.getElementById("leonardo");
const botonManhattan = document.getElementById("manhattan");
const botonTower = document.getElementById("towerbridge");

botonCapri.addEventListener('click',() => {
    const producto = items.find((rompecabezas)=> {
        return rompecabezas.id === botonCapri.dataset.id
    });
    carrito.push(producto);
    //altaItems();
    mostrarCarrito();
    altaItems();
});

botonVegas.addEventListener('click',() => {
    const producto = items.find((rompecabezas)=> {
        return rompecabezas.id === botonVegas.dataset.id
    });
    carrito.push(producto);
    //altaItems();
    mostrarCarrito();
    altaItems();
});

botonLeonardo.addEventListener('click',() => {
    const producto = items.find((rompecabezas)=> {
        return rompecabezas.id === botonLeonardo.dataset.id
    });
    carrito.push(producto);
    //altaItems();
    mostrarCarrito();
    altaItems();
});

botonManhattan.addEventListener('click',() => {
    const producto = items.find((rompecabezas)=> {
        return rompecabezas.id === botonManhattan.dataset.id
    });
    carrito.push(producto);
    //altaItems();
    mostrarCarrito();
    altaItems();
});

botonTower.addEventListener('click',() => {
    const producto = items.find((rompecabezas)=> {
        return rompecabezas.id === botonTower.dataset.id
    });
    carrito.push(producto);
    //altaItems();
    mostrarCarrito();
    altaItems();
}); */

const getProducts = async () => {
    const response = await fetch("Datos/articulos.json");
    const data = await response.json();
    console.log(data);

}

getProducts();

data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>`;

})



function altaItems() {

    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
}

function mostrarCarrito() 
{
    const tabla = document.getElementById('items');
    tabla.innerHTML = ``;
    let counter = 1;
    console.log(carrito);

    carrito.forEach((producto) => {
        tabla.innerHTML += `
        <tr id='tablita'>
            <th>${counter}</th>
            <td>${producto.nombre}</td>
            <td>${producto.piezas}</td>
            <td>${producto.marca}</td>
            <td>${producto.nivel}</td>
            <td>${producto.precio}</td>
            </tr>
            `;
        counter++;
        console.log(tabla.innerHTML);
   })
   tr = document.createElement('tr');
   tr.innerHTML = `<th><th>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td>${carrito.reduce((total,item) => total + item.precio,0)}<td>
                    `;
   tabla.appendchild(tr); 
    

}

const btnVaciar = document.getElementById('vaciar');
btnVaciar.addEventListener('click', () =>{
    carrito = []
    localStorage.clear()
    mostrarCarrito();
});
