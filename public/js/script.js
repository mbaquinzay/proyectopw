/* // Función para obtener productos de celulares desde la API de Mercado Libre
async function obtenerProductosCelulares() {
    try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares');
        const data = await response.json();
        const productos = data.results;

        const contenedorProductos = document.getElementById('productos');
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <h2>${producto.title}</h2>
                <p>ID: ${producto.id}</p>
                <img src="${producto.thumbnail}" alt="${producto.title}">
            `;
            contenedorProductos.appendChild(productoDiv);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

// Llamada a la función para obtener productos al cargar la página
document.addEventListener('DOMContentLoaded', obtenerProductosCelulares); */


// scripts.js

// Función para obtener productos de celulares desde la API de Mercado Libre
async function obtenerProductosCelulares() {
    try {
        //const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares');
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
        const data = await response.json();
        const productos = data.results;

        const contenedorProductos = document.getElementById('productos');
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'col-md-4';
            productoDiv.innerHTML = `
                <div class="card product-card">
                    <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text price">$${producto.price}</p>
                        <a href="#" class="btn button-primary">Comprar Ahora</a>
                    </div>
                </div>
            `;
            contenedorProductos.appendChild(productoDiv);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

// Llamada a la función para obtener productos al cargar la página
document.addEventListener('DOMContentLoaded', obtenerProductosCelulares);
