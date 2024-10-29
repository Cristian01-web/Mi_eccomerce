// script.js

let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    // Agregar el producto al carrito como un objeto
    carrito.push({ nombre, precio, cantidad: 1 });
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const contenidoCarrito = document.getElementById("contenidoCarrito");
    contenidoCarrito.innerHTML = ""; // Limpiar contenido existente

    let total = 0;

    carrito.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td>
                <input type="number" value="${item.cantidad}" min="1" onchange="actualizarCantidad(${index}, this.value)">
            </td>
            <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        `;
        contenidoCarrito.appendChild(row);
        total += item.precio * item.cantidad; // Calcular el total
    });

    document.getElementById("totalCarrito").innerText = total.toFixed(2); // Actualizar total en la vista
}

// Función para actualizar la cantidad de un producto en el carrito
function actualizarCantidad(index, cantidad) {
    carrito[index].cantidad = parseInt(cantidad);
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar producto del carrito
    actualizarCarrito(); // Actualizar vista del carrito
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = []; // Limpiar el carrito
    actualizarCarrito(); // Actualizar vista del carrito
}
