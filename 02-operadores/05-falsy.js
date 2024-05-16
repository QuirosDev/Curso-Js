// short-circuit


// Falso
// false
//0
//''
// null
// undefined
// NaN

//el operador && se utiliza para poder ejecutar funciones siempre y cuando la primera haya evaluado en true

let nombre = 'Chanchito feliz';
let userName = nombre || 'nombre anonimo';
console.log(userName);

function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();