/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
let dev = devolverString('Daniel');
console.log(dev);

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
    return x + y;
}
let sum = suma(3,4);
console.log(sum);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
let rest = resta(49,5);
console.log(rest);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
let div = divide(4,2);
console.log(div);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
let mul = multiplica(3,4);
console.log(mul);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y;
}
let obt = obtenerResto(10,2);
console.log(obt);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
