//!Carrito de Compras
let carrito = []
let GranTotal = 0

//!Array de Productos
const items = [
    { id:1, nombre: "Jersey", precio: 2000 },
    { id:2, nombre: "Shorts", precio: 3000 },
    { id:3,  nombre: "Mochila", precio: 1500 },
    { id:4, nombre: "Gorra", precio: 800 },
]

//!Funcion de compra
function tiendaDeportiva (){
    let continuarCompra = true
    let total = 0
    alert("¡Bienvenido a nuestra tienda de ropa deportiva!")

    while (continuarCompra) {
        let listaProductos = "Productos a la venta: \n"
        items.forEach(items => {
            listaProductos += `${items.id}. ${items.nombre}: $${items.precio}\n`
        })

        // Prompt para elegir
        let elegirProducto = parseInt(prompt(listaProductos + "\nIngrese el numero del producto que desea comprar\nCancel"))

        // Validar selección
        let productoElegido = items.find(producto => producto.id === elegirProducto)

        if (productoElegido) {
            carrito.push(productoElegido)
            total += productoElegido.precio
            alert(`${productoElegido.nombre} agregado al carrito!`)
        } else {
            alert("Producto no válido")
        }

        // Preguntar si desea seguir comprando
        continuarCompra = confirm("¿Desea seguir comprando?")
    }

    // Mostrar resumen de la compra
    if (carrito.length > 0) {
        let resumen = "Resumen de su compra:\n"
        carrito.forEach(producto => {
            resumen += `${producto.nombre} - $${producto.precio}\n`
        })
        resumen += `\nTotal a pagar: $${total}`
        alert(resumen)
    } else {
        alert("No se realizaron compras")
    }
}


//!Correr Funcion
tiendaDeportiva()