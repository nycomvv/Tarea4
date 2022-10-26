// Objeto Alumnos
const alumno = {
    nombre : "Marcelo",
    Apellido : "Vasquez",
    //Nota : 6,
    misNotas : [6,8 , 9 ,2 , 5, 10],
}

document.write("<br>");
document.write("ALUMNO : " + alumno.nombre + " " + alumno.Apellido);
document.write("<br>");
//document.write("Notas : " + alumno.Nota);
document.write("NOTAS : " + alumno.misNotas);
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
//document.write("Las Notas Son : 6 , 8 , 9 , 2 , 5 , 10");
document.write("<br>");
document.write("SUMA: " + ResultadoSuma);
document.write("<br>");
document.write("PROMEDIO : " + Promedio);

console.log("Suma de Notas : ", ResultadoSuma)
// alert(ResultadoSuma)
console.log("Promedio de Notas: ", Promedio)
// alert(Promedio)
