'use stric'
let consulta1 = Number (prompt('¿Cuántas personas viven en tu casa?'));
let consulta2 = Number (prompt('¿Cuántas veces vas/van al baño diariamente?'));
let consulta3 = Number (prompt('¿Cuántos rollitos usas/usan por visita al baño? (aproximadamnte)'));
let consulta4 = Number (prompt('Respecto a la pregunta anterior ¿cuántas hojas por rollito usas/usan?'));

function cantidadDeHojasPorHogar(arg1, arg2, arg3, arg4){
    let totalHojas;
    if(isNaN(arg1 && arg2 && arg3 && arg4) || isNaN(arg1 || arg2 || arg3 || arg4)){
        alert ('El valor entregado no es númerico.')
    }else{
        totalHojas = arg1*(arg2*(arg3*arg4));
    }
    return totalHojas;
} 

let preguntaPapel = cantidadDeHojasPorHogar(consulta1, consulta2, consulta3, consulta4);
let respuesta = document.getElementById('respuesta');
respuesta.innerHTML = `<h2> En tu casa usan aproximadamente ${preguntaPapel} hojas de papel a diario ...</h2>`  


function cantidadDeHojasAnual(preguntaPapel){
    const anual = 365;
    let totalAnual;
    totalAnual = preguntaPapel * anual;
    return totalAnual;
}

let preguntaPapelAnual = cantidadDeHojasAnual(preguntaPapel);
let respuestaHojaAnual = document.getElementById('respuestaHojaAnual');
respuestaHojaAnual.innerHTML = `<h2> y cerca de ${preguntaPapelAnual} hojas de papel al año.</h2>` 


function porcentajeArbolUsado(preguntaPapelAnual){
    const arbol = 12000;
    let totalPorcentajeArbol;
    totalPorcentajeArbol = preguntaPapelAnual/arbol;
    return totalPorcentajeArbol;
}

let totalArbol = porcentajeArbolUsado(preguntaPapelAnual);
let respuestaArbol = document.getElementById('respuestaArbol');
respuestaArbol.innerHTML = `<h1> Lo que significa que usan ${totalArbol.toFixed(2)} árbol/árboles en papel higiénico anualmente.</h1>` 



/* let consulta1 = Number (prompt('cuantas veces va al baño diariamente'));
let consulta2 = Number (prompt('cuantos cuadrados de papel usa cada vez que va'));

function papel(arg1 , arg2){
    const cuadro = 10;
    const mes = 30;
    let totalPapel;
    if(isNaN(arg1 && arg2) || isNaN(arg1 || ar2)){
        alert('el valor entragado no es numerico');
    }else{
        totalPapel = arg1 * (arg2*cuadro) * mes;
    }
    return totalPapel;
}
let preguntaPapel = papel(consulta1 ,consulta2);
let respuesta = document.getElementById('respuesta');
respuesta.innerHTML = `<h1> Ud usa un aproximado de ${preguntaPapel} cms de papel </h1>` */