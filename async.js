
async function obtenerDatosJson(url) {
    // Declara una función asíncrona llamada obtenerDatosJson que toma una URL como parámetro.
    try {
        const respuesta = await fetch(url); 
        // Espera la respuesta de una petición HTTP a la URL proporcionada usando fetch.
        
        const datos = await respuesta.json();
        // Espera la conversión de la respuesta a formato JSON.
        
        return datos;
        // Devuelve los datos JSON obtenidos.
    }
    catch (error) {
        console.error('Error al obtener datos JSON', error);
        // Muestra un mensaje de error en la consola si ocurre un problema al obtener los datos JSON.
        
        console.log(error);
        // Muestra el objeto de error en la consola para más detalles.
        
        return null;
        // Devuelve null si hay un error.
    }
}

/* async function mostrarDatosJsonConsola (){
    const url = 'https://developers.mercadolibre.com.ar/es_ar/buscador-de-productos/1'
    // Declara una variable url que contiene la URL de la API de Mercado Libre.
    const datos = await obtenerDatosJson(url);
    console.log(datos)

}

mostrarDatosJsonConsola(); */

async function mostrarDatosJsonConsola() {
    //const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const url = 'https://developers.mercadolibre.com.ar/es_ar/buscador-de-productos'

    
    // Declara una variable url que contiene la URL de una API pública que devuelve datos JSON.
    
    const datos = await obtenerDatosJson(url);
    // Llama a la función obtenerDatosJson con la URL y espera a que devuelva los datos.
    
    console.log(datos);
    // Muestra los datos obtenidos en la consola.
}

mostrarDatosJsonConsola();
// Llama a la función mostrarDatosJsonConsola para iniciar el proceso.



