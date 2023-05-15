let carrito = [];
const shop = document.getElementById("shopCont");
const verCarrito = document.getElementById("verCarrito");
const bagContainer = document.getElementById("bagContainer");


const getProducts = async () => {
    const response = await fetch("Datos/articulos.json");
    const data = await response.json();


    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">$ ${product.precio} </p>`;

        shop.append(content);


        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        comprar.addEventListener("click", () => {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
            });
            save();
            console.log(carrito);
        });

    }); // Cierre del forEach

    verCarrito.addEventListener("click", () => {
        const bagHeader = document.createElement("div");
        bagHeader.className = "bag-Header"
        bagHeader.innerHTML = `
        <h1 class="header-title">Carrito</h1>`;

        bagContainer.append(bagHeader);

        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "X";
        modalbutton.className = "modal-header-button";

        bagHeader.append(modalbutton);


        carrito.forEach((product) => {
            let carritoContent = document.createElement("div")
            carrito.className = "modal-content"
            carrito.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio} </p>
        `;
        });


    });

} //Cierre del getProducts

getProducts();

const save = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

};

/*


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
 */