// Objeto Alumnos
const alumno = {
    nombre : "Marcelo",
    apellido : "Vásquez",
    misNotas : [6,8 , 9 ,2 , 5, 10],
}

const nombre = alumno.nombre;


document.write("<br><br>");
document.write("<strong>ALUMNO : </strong> " + alumno.nombre + " " + alumno.apellido);
document.write("<br><br>");
document.write("<strong>NOTAS : </strong>" + alumno.misNotas[0] + " , " + alumno.misNotas[1]+
" , " + alumno.misNotas[2]+ " , " + alumno.misNotas[3]+ " , " +
 alumno.misNotas[4]+ " , " + alumno.misNotas[5]);

// Funcion Suma Notas
function suma (n1, n2, n3, n4, n5, n6) {
    const suma = n1+n2+n3+n4+n5+n6

    return suma
}
const ResultadoSuma = suma(6 , 8 , 9 ,2 , 5, 10)

// Funcion Promedio 
function promedio (ResultadoSuma) {
    const promedio = ResultadoSuma / 6
    return promedio.toFixed(1)
}
const Promedio = promedio(ResultadoSuma)
document.write("<br>");
document.write("<br>");
document.write("<p class=\"container__text\">SUMA = " + ResultadoSuma+ "</p>");
document.write("<br><br>");
document.write("<p class=\"container__text1\">PROMEDIO = " + Promedio +"</p>");

console.log("Suma de Notas : ", ResultadoSuma)
// alert(ResultadoSuma)
console.log("Promedio de Notas: ", Promedio)
// alert(Promedio)
