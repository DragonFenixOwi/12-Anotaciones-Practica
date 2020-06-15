/*
    -------------------------
        PARÁMETROS-PARAMS
    -------------------------
*/


/* 
    - TODOS LO QUE SALIO CON ECMAScript6
*/

/* 
    - Descargar el plugin Code Runner
        - facilita la tarea de probar un trozito de codigo
        -Me funciona
*/

function parametrosOLD(nombre,anyo)
    {
        var nombre = nombre || "Juan";
        var anyo =anyo || 32;
        console.log(nombre,anyo);
    }

/*
    ECMASript6
        - Nueva funcionalidad
*/

function parametrosES6(nombre="Juan", anyo = 32)
    {
        console.log (nombre,anyo);
    }



//llamada
parametrosOLD();
parametrosES6();
parametrosES6("Pep",23);




/*
    -------------------------
        CONCATENACIONES
    -------------------------
*/



let hola ="Hola";
let mundo ="Mundo";
let frase = hola + " " + mundo + " ";


/*  
    - En ES6 aparece los Template Literals
        - con  ``
        - con las inclusiones de  ${}
*/

let fraseES6 = `${hola} ${mundo}`;

console.log(frase);
console.log(fraseES6);



/*
    ------------------------------------
        MULTILIENAS vs TEMPLATE LITERAL
    -----------------------------------
*/

let fraseAntigua = "Esta es una frase. \n" + "Aqui la otra frase. \n";

//ES6 - TEMPLATE LITERAL
let fraseNueva = `Esta es una frase. 
Aqui la otra frase.`;

console.log(fraseAntigua);
console.log(fraseNueva);

/*
    -------------------------
        DESESTRUCTURACIÓN
    -------------------------
*/


let persona = 
    {
        nombre : "Miquel",
        edad : 50
    };
console.log("Antes de ES6 ->", persona.nombre, persona.edad);


// Luego vino la Desectructuración del ECMAScript6
let {nombre,edad} =persona;
console.log(`Despues de ES6 -> ${nombre} ${edad}`);



/*
    -------------------------
        SPREAD OPERATOR
    -------------------------
*/

/*
    -Es un operdor nuevo. Para ayudar a los arrays. Porque eran un poco pesados
    o pueden ser un poco pesado
*/

let equipo1 =["Pep", "Pedro","Jose"];
let equipo2 =["Ana","Joana","Maria"];

let partido =["David","Pep", "Pedro","Jose","Ana","Joana","Maria"];
console.log("Antes de ES6 --->", partido);




//Nuevo gracias al ECMAScript6
let partidoES6 =["David", ...equipo1, ...equipo2];
console.log("Despues de ES6 --->", partidoES6);


// var, let, const
/*
    -------------------------
        VAR - LET - CONST
    -------------------------
*/

/*
    -------------------------
        ARROW FUNCTIONS
    -------------------------
*/

/*
    -arrow-function  inicialmente son funciones anónimas
    -en ES6 se utilizan dentro de constantes
    - Las funciones no se puede repetir
        -las constantes obligan a que no se repitan
*/

const personas =   
    [
        {nombre:'Pedro',edad=50},
        {nombre:'Juana',edad=40}
    ];

let grupo = personas.map(function(item)
    {
        console.log("Antes de ES6 --->", item.nombre);
    });


// Con ECMAScript6 tendriamos

let grupoES6 = personas.map((item) => console.log(`Despues de ES6 ---> ${item.nombre}`));





/*
    ---------------
        PROMESAS
    ---------------
*/



/*
    ---------------
        CLASES
    ---------------
*/



/* 
    ------------------------------------
        ¿QUE SALIO EN ECMAScript7 ?
    ------------------------------------
*/

/* 
    --------------------
        INCLUDE
    --------------------
*/


/* 
    - Los includes
        - veniamos a validar la existencia de un valor dentro de un arreglo
        - Puedo hacer con otras funciones pero aqui en ECMAScript7 no los plantean
        mas facil
*/

//si hay un elemento dentro de un arreglo
let numeros = [1,2,3,4,5,6,7,8,9]

if (numeros.includes(3))
    {
        console.log ("correcto");
    }
else
    {
    console.log ("correcto");
    }


/* 
    -----------------------------------------------
        SIMPLIFICAR LAS OPERACIONES CON POTENCIAS
    -----------------------------------------------
*/


let base =4;
let exponente =3;
let resultado = base ** exponente;

console.log(resultado);





/* 
    ------------------------------------
        ¿QUE SALIO EN ECMAScript8 ?
    ------------------------------------
*/



/*
    ¿que salio de forma espectacular?
        - pues nada espectacular. No hay otro ECMAScript6
*/

/* 
    ----------------------
        OBJECT.ENTRIES
    ----------------------
*/


const datos =
    {
        frontend: "Juan", 
        backend: "Carlos",
        designer: "Ana",
    }

// Vamos a convertir el objeto en array
const nuevoArreglo = Object.entries(datos);
console.log(nuevoArreglo);

/*
    si quiero saber 
        ¿cuantos elementos hay?
*/

console.log(nuevoArreglo.length);

/*
    ¿que podemos pedir mas?
        - quiero saber que llaves y que valores tenemos mas
    -Nos vamos a datos ahora
*/

const key = Object.keys(datos);
const values = Object.values(datos);
console.log(key);     //solo un array de llaves 
console.log(values);    // solo un array de valores



/* 
    ----------------------
        PADS
    ----------------------
*/

/* 
    - Es como una concatenacion 
    - Algunos lo llaman paddings
    -
    -puedes añadir un string tanto al inicio como al final 
*/

const mundo = "mundo";
console.log(mundo.padStart(10,"hola ")) ;  
// padStart("espacio que quiero generar o caracteres que necesito", "string de 10 caracteres por ejemplos" )

const mundo = "mundo";
console.log(mundo.padStart(50," *")) ;  
// padStart("espacio que quiero generar o caracteres que necesito", "string de 10 caracteres por ejemplos" )


/*
    - Examen
        - como mucho hasta la 1 
        - se manda por github
        - No va  salir
            -
        - La tarea es la practica para el examen final
        - no se ponga nervioso. Se fuma los pitllos de 4 en 4
*/