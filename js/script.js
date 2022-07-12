//BIENVENIDA Y PROMEDIO DE GOLES
let bienvenido = prompt("Bienvenido al torneo de primera division!\n Queres saber cual es tu promedio de goles? \n\n 1 - Si \n 2 - No\n")
if (bienvenido == 1 || bienvenido == "si") {
    let partidos = Number(prompt("Ingresa la cantidad de partidos jugados"));
    let sumadegoles = 0;
    for (let i = 1; i <= partidos; i++) {
        let partido1 = Number(prompt("Ingresa la cantida de goles que hiciste en el partido N° " + i))
        sumadegoles = sumadegoles + partido1
        promedio = (sumadegoles / partidos)
    }
    alert("Felicitaciones en " + partidos + " partidos, hiciste " + sumadegoles + " goles a tus rivales,\n tenes " + promedio + " goles de promedio por partidos segui asi!")

} else {
    alert("que disfrutes nuestro sitio");
}
