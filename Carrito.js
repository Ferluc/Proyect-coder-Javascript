let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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
        bagContainer.innerHTML="";
        bagContainer.style.display ="flex";
        const bagHeader = document.createElement("div");
        bagHeader.className = "bag-Header"
        bagHeader.innerHTML = `
        <h1 class="header-title">Carrito</h1>`;

        bagContainer.append(bagHeader);

        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "X";
        modalbutton.className = "modal-header-button";

        modalbutton.addEventListener("click",() => {
            bagContainer.style.display ="none";
        });

        bagHeader.append(modalbutton);


        carrito.forEach((product) => {
            let carritoContent = document.createElement("div")
            carritoContent.className = "bag-content"
            carritoContent.onclick = function(){
                this.parentElement.removeChild(this);
               eliminarProducto();
            };
            carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio} </p>
        <button>-</button>`;

        bagContainer.append(carritoContent);
        });

        const total = carrito.reduce((acc,prod)=> acc + prod.precio, 0);
        
        const totalCompra = document.createElement("div")
        totalCompra.className="total-content"
        totalCompra.innerHTML=`Total a Abonar:$ ${total}`;
        bagContainer.append(totalCompra);
    });

} //Cierre del getProducts

const eliminarProducto =() =>{
    const foundId = carrito.find((Element) => Element.id);
    carrito = carrito.filter((carritoId)=> {
        return carritoId !== foundId;
        totalCompra();
    });
    
    save();
}

getProducts();

const save = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

 };

JSON.parse(localStorage.getItem("carrito"))