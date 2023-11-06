// Realizado por :
//                  Agüero, Gerson
//                  Assefh, Emilio Nicolás
//                  Gomez Pacheco, Pamela
//                  Ramallal, Mario
//
//
// Consigna: Tengo desarrollada la siguiente función en javascript 
//  function suma (a,b,callback){
//          let c = a +b;
//          callback( );}
// 1)-¿Que es el tercer parámetro recibido?
// 2)-¿En que casos es obligatorio desarrollar este tipo de funciones?
// 3)Realizar un llamado a la función de ejemplo

// Desarrollo:
// 1)- Es una llamada a función. Lo que hace la función Suma es recibir dos parametros para realizar la operación y una vez que obtiene                       
// el resultado, llama a la funcion "callback" y ésta usa como parámetro el resultado de la operación suma.
//
// 2)- Si bien el uso de este tipo de llamadas a funciones no es obligatorio y depende principalmente de la complejidad del programa. 
// Es un recurso muy útil porque al dividir el codigo en distintas funciones, éstas pueden reutilizarse y aplicarse en otros contextos
//

//3)
function callback1(resultado) {
    console.log("El resultado es: " + resultado);}

function suma(a, b, callback) {
    let c = a + b;
    callback(c);}

suma(3,9, callback1);