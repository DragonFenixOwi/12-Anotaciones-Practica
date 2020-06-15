/*
    --------------------
        Autor: Owi
    --------------------
*/

/*
    - Llamaar a la libreria xmlhttprequest
    - Nos permite solicitar datos a traves de una URL, muy util este caso 
    API.
*/

/*
    -------------------------
        vARIABLES GLOBALES
    -------------------------
*/



let XMLHttpRequest = require ("xmlhttprequest").XMLHttpRequest;

//URL donde vamos a hacer la solicitud de los datos de la API 
const API = "https://rickandmortyapi.com/api/character/"; 


/*
    - Lo de abajo: Esto ya es una implementación de EMAScript actual
    - Tendremos una arrowFunction
*/


//Creamos un arrow-Function
const conectar =(api_url) => 
    {
        /* 
            -Devolvemos una promesa. La promersa es una función que contiene dos parárametros que 
            contiene "resolve y "reject". En formato Arrow-Function.
        */
            return new Promise((resolve, reject) =>
            {
                // se crea un objeto, instanciado de la libreria responseXML
                let xhttp = new XMLHttpRequest();
        
                // Tenemos un metodo que nos permite crear un asincronismo 
                xhttp.open('GET',url_api,true); 

                // Se esperan ambos estados del servidor al conectar con él através de la URL
                xhttp.onreadystatechange = function(event)
                    {
                        /* Escuchamos diferentes elementos. 
                            -el estados okey seria el 4. El estado 200 es tal cosa. 
                            todo esto es mas de "base de datos"
                        */
                            if(xhttp.readyState ===4) 
                                {                                                           
                                    if(xhttp.status===200) 
                                        {
                                            // si los estados son correctos, convertir el sistema de JSON
                                            //hacemos lo que se llama parsear JSON 
                                            const xmlhttpRequest = JSON.parse(xhttp.responseText); 
                                            resolve(xmlhttpRequest);
                                        }
                                    else
                                        {
                                            const error = new Error("Error",url);
                                            reject(error);
                                        }
                                }
                    } ;
                xhttp.send();
            });
            
    };


/*
    - ¿Como consumimos lo de arriba?
    - haremos lo mas parecido con los callback's. Pero es un poco feo
    - Intento hacer los minimos cambios. 
    - Todo lo que hay en un Json es consumible. Tiene que dejarte 
    consumir de una forma u otra.
    -  Otro ejemplo
        - Stark Works- esta en un directorio diferentes. 
        - Debes saber tambien la url nueva
        - Debes saber el padre de ese objeto nuevo
    - ¿es necesario obligatorio pedir datos dentro de una misma Jerarquia?
        - 
*/

conectar(url)
    .then((response) =>
        {
            const {count} = response.info;
            
            const {id} = response.results[0];
            // aqui hay el url inicial de arriba
            const url_2 = url + id;
            console.log(count);

            return conectar(url_2);
        })
    .then((response) =>
        {
            const {name} = response;
            /*
                aqui llamamos a otro tipo de URL. Dentro del objeto ya tenemos una direccion "origin.url" . 
                El mismo objeto tiene un enlace dentro del url, que redirecciona.
            */
            const url_3 = repsonse.origin.url; 
            console.log(name);

            return conectar(url_3);
        })

.then((response) =>
        {
            const {dimension} = response;
            console.log(dimension);
        })

.catch ((error) => 
        {
            console.error(error);
        }); 