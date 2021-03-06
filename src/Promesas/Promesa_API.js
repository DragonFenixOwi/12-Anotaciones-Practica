

/*
    -----------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: Owi
        NPM + NODEjs. PROMESAS Y API
    -----------------------------------------------------------
*/

/*
    ------------------------------
        VARIABLES GLOBALES
    ------------------------------

*/


// Llamar o Instanciar la "dependencia" con "require"  
let XMLHttpRequest = require ("xmlhttprequest").XMLHttpRequest;

//con lo de arriba. Ahora solo necesitamos recoger una "constante" de la API. 
const API = "https://rickandmortyapi.com/api/character/"; 



/*  
    ------------------------------
        CONEXION + VALIDACIÓN 
    ------------------------------
*/


function traerDatos(url_api)
    {
        //Se instacia "xhttp" (se convierte en un objeto nuevo). "xhttp" es una instancia de "XMLHttpRequest". 
        let xhttp = new XMLHttpRequest();
        
        // Consultamos "GET,url_api = API y true". "GET" metodo de vizualización de la url. "True" sistema de activación Asincrono
        xhttp.open('GET',url_api,true); 

        return new Promise((resolve, reject) =>
        {
        // "onreadystatechange" Manera de escuchar eventos. Praparse para un cambio. Se logra gracias a la funcion "function(event)"
        xhttp.onreadystatechange = function(event)
                    {  
                        
                        if(xhttp.readyState ===4) // 4to Estado. Indica si se ha completado el "request". Si es completado entra al if
                            {                                                           
                                if(xhttp.status===200) // Estado 200. Validamos si es correcta la petición del servidor
                                    {
                                        resolve(JSON.parse(xhttp.responseText)); // Pareamos  
                                    }
                                else  
                                    {
                                        let  error = new Error("Error", url); 
                                        return reject(error); 
                                    };                                                                   
                            };
                        };xhttp.send(); //Envio de petición  
                }); //Nota: No enviaba datos porque el metodo ".send" estaba afuera de la promesa
    };




/*
    -------------------------------------------    
            LLAMADA A LA API
            ENVIO DE DATOS
            RECUPERACION DE DATOS
            IMPRIMRESIÓN POR CONSOLA
    -------------------------------------------
*/
traerDatos(API)
    .then ((dato_1) =>
        {
            //Se Imprime en consola 
            console.log(`\t Primeros Datos ".then" `);
            console.log(`\t - ${dato_1.info.count}`);
            console.log(`\t - ${dato_1.info.pages}`);
            // Se envia la siguiente petición
            return traerDatos (API + dato_1.results[0].id);
        })

    .then ((dato_2) =>
        {
            //Se Imprime en consola 
            console.log(`\n `);
            console.log(`\t Segundos Datos ".then" :\n `);
            console.log(`\t - ${dato_2.name}`);
            console.log(`\t - ${dato_2.status}`);
            console.log(`\t - ${dato_2.species}`);
            console.log(`\t - ${dato_2.gender}`);
            // Se envia la siguiente petición
            return traerDatos (dato_2.origin.url);
        })

    .then ((dato_3) =>
        {
            //Se Imprime en consola 
            console.log(`\n `);
            console.log(`\t Tercer Dato ".then" :\n `);
            console.log(`\t - ${dato_3.name}`);
            console.log(`\t - ${dato_3.type}`);
            console.log(`\t - ${dato_3.dimension}`);
        })

    .catch ((error) => 
        {
            //Se Imprime en consola
            console.error(error);
        }); 