//! Carrito de Compras
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

//! Lista de Productos
const productos = [
    { id:1, nombre: "Jersey", precio: 2000 },
    { id:2, nombre: "Shorts", precio: 3000 },
    { id:3, nombre: "Mochila", precio: 1500 },
    { id:4, nombre: "Gorra", precio: 800 },
];

// Muestra los productos en la pagina
function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>${producto.nombre}</strong> - $${producto.precio}
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
        contenedor.appendChild(div);
    });
}

// Muestra el carrito en la pagina
function mostrarCarrito() {
    const lista = document.getElementById("carrito");
    lista.innerHTML = "";
    carrito.forEach((producto, idx) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        lista.appendChild(li);
    });
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    document.getElementById("total").textContent = "Total: $" + total;
}

// Agrega un producto al carrito
window.agregarAlCarrito = function(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

// Vacia el carrito
document.getElementById("vaciar").onclick = function() {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
};

// Al cargar la página, muestra todo
mostrarProductos();
mostrarCarrito();