// Funcion Suma Notas
function suma (n1, n2, n3, n4, n5, n6) {
    const suma = n1+n2+n3+n4+n5+n6

    return suma
}
const ResultadoSuma = suma(6 , 8 , 9 ,2 , 5, 10)

// Funcion Promedio 
function promedio (ResultadoSuma) {
    const promedio = ResultadoSuma / 6
    return promedio
}
const Promedio = promedio(ResultadoSuma)

document.write("<br>");
document.write("La Suma es: " + ResultadoSuma);
document.write("<br>");
document.write("El Promedio es : " + Promedio);

console.log("Suma de Notas : ", ResultadoSuma)
// alert(ResultadoSuma)
console.log("Promedio de Notas: ", Promedio)
// alert(Promedio)
