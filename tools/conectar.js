/*
    -Vamos a modularizar nuestro codigo 
        - y es una de las mejores cosas que podemos hacer
*/


let XMLHttpRequest = require ("xmlhttprequest").XMLHttpRequest;

//URL donde vamos a hacer la solicitud de los datos de la API 
const API = "https://rickandmortyapi.com/api/character/"; 

const conectar =(api_url) => 
    {
        return new Promise((resolve, reject) =>
            {
                let req = new XMLHttpRequest();
                req.open('GET',url_api,true); 
                req.onreadystatechange = function(event)
                    {
                        if(xhttp.readyState ===4) 
                            {                                                           
                                xhttp.status===200 
                                    ? resolve(JSON.parse(xhttp.responseText))
                                    : reject (new Error("Error",url));
                            };
                        req.send();
                    };
            });
    }