/*
    --------------------
        Autor: Owi
    --------------------
*/

/*
    -------------------------
        vARIABLES GLOBALES
    -------------------------
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

conectar (url)
    .then((data) =>
            {
                console.log(data.info.count);
                //return conectar(`${url} ${data.results[0].id`);
            })

    .then((data) =>
            {
                console.log(data.name);
               // return
            })
    .then((data) =>
                {
                    console.log(data.dimension);
                })