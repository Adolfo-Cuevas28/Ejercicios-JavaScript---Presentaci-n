//try catch
const numero1 = 20;
const numero3 = 30;

try {                           //Conjunto de líneas que pueden provocar la excepción
    console.log(numero1);
    console.log(numero2);
} catch (excepcion) {           //Instrucciones a realizar si sucede una excepción
    console.log(excepcion);     //Preferentemente usar "console.error()"
}

console.log(numero3);

