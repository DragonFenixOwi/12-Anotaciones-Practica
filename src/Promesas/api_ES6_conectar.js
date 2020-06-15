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


//traer modulo conectar
const conectar = require('../../tools/conectar')

const API = "https://rickandmortyapi.com/api/character/"; 

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