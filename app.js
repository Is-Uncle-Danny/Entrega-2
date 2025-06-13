//!Carrito de Compras
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let GranTotal = 0

//!Array de Productos
const items = [
    { id:1, nombre: "Jersey", precio: 2000 },
    { id:2, nombre: "Shorts", precio: 3000 },
    { id:3,  nombre: "Mochila", precio: 1500 },
    { id:4, nombre: "Gorra", precio: 800 },
];

function renderProductos() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>${item.nombre}</strong> - $${item.precio}
            <button onclick="agregarAlCarrito(${item.id})">Agregar</button>
        `;
        contenedor.appendChild(div);
    });
}

function renderCarrito() {
    const ul = document.getElementById("carrito");
    ul.innerHTML = "";
    carrito.forEach((item, idx) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        ul.appendChild(li);
    });
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    document.getElementById("total").textContent = "Total: $" + total;
}

window.agregarAlCarrito = function(id) {
    const producto = items.find(i => i.id === id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
};

document.getElementById("vaciar").onclick = function() {
    carrito = [];
    localStorage.removeItem("carrito");
    renderCarrito();
};

renderProductos();
renderCarrito();