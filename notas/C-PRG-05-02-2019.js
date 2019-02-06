/**
 * NOTAS:
 * Programacion funcional
 * 
 * BUSCAR 
 * 
 * 
 * typeof compara primero el tipo y luego el valor, pero si comparas:
 * (typeof oadasdasd === typeof undefined)
 * 
 * 
 * 
 * JS ORDEN PARA COMPARAR
 * Como no es tipado intenta tipar para hacer comparaciones
 * lo primero es cambiar todo por uno de tipo numero, si no se puede los combierte como strings y luego como objetos, esto solo es con el " == "
 */




// Funciones autoinvocadasº

/**open
 * 
 * Ventajas:
    Sus variables no pueden ser accesadas desde fuera de la funcion autoinvocada pues estan como encapsuladas
    A una funcion autoinvocada se puede pasar variables globales por medio de parametros
 */

(function init (){
    console.log('Hello');
}());
/** Otras manera de
(function init (){
    console.log('Hello');
})();

var init = function(){
    console.log('Hello')
}();


var a = 'v';
var b = 'c';

var init = function(x,j){
    console.log('Hello',x,j,a,b);
}(a,b);
 */