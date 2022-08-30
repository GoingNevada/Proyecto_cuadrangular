var nombre = ["", "", "", ""]; // variable global de los nombres

// Algoritmo de ordenamiento burbuja
function Burbuja(mrk1, mrk2, mrk3, mrk4, eq1, eq2, eq3, eq4) {
    var lista = [mrk1, mrk2, mrk3, mrk4];
    nombre = [eq1, eq2, eq3, eq4];
    var n, i, k, aux, aux2;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
                aux2 = nombre[i];
                nombre[i] = nombre[i + 1];
                nombre[i + 1] = aux2;
            }
        }
    }
    return lista;
}

// Funcion del boton jugar

function equipos() {
    // obtencion de los nombres de los equipos
    let equi1 = document.getElementById("equipo1").value;
    let equi2 = document.getElementById("equipo2").value;
    let equi3 = document.getElementById("equipo3").value;
    let equi4 = document.getElementById("equipo4").value;

    // condicion para que no exista equipo invalido
    if ((equi1 == "") || (equi2 == "") || (equi3 == "") || (equi4 == "")) {
        alert("No se han ingresado todos los nombres de los equipos");
    }
    else {
        // obtencion de los marcadores para calcular posiciones
        let marcador1 =parseInt(document.getElementById("mrk12").value);
        let marcador2 = parseInt(document.getElementById("mrk21").value);
        let marcador3 = parseInt(document.getElementById("mrk34").value);
        let marcador4 = parseInt(document.getElementById("mrk43").value);
        let marcador5 = parseInt(document.getElementById("mrk13").value);
        let marcador6 = parseInt(document.getElementById("mrk31").value);
        let marcador7 = parseInt(document.getElementById("mrk24").value);
        let marcador8 = parseInt(document.getElementById("mrk42").value);
        let marcador9 = parseInt(document.getElementById("mrk32").value);
        let marcador10 = parseInt(document.getElementById("mrk23").value);
        let marcador11 = parseInt(document.getElementById("mrk41").value);
        let marcador12 = parseInt(document.getElementById("mrk14").value);
        // suma de los puntajes para cada equipo
        mrkequi_1 = marcador1 + marcador5 + marcador12;
        mrkequi_2 = marcador2 + marcador7 + marcador10;
        mrkequi_3 = marcador3 + marcador6 + marcador9;
        mrkequi_4 = marcador4 + marcador8 + marcador11;
        // llamado a la funcion Burbuja() para el ordenamiento de los datos
        variables = Burbuja(mrkequi_1, mrkequi_2, mrkequi_3, mrkequi_4, equi1, equi2, equi3, equi4);
        // impresion de datos por consola para comprobar el ordenamiento
        console.log(variables);
        console.log(nombre);
        // asignacion de los valores a cada puntaje y posicion correspondiente
        var puesto1 = nombre[3];
        var puntaje1 = variables[3];
        var puesto2 = nombre[2];
        var puntaje2 = variables[2];
        var puesto3 = nombre[1];
        var puntaje3 = variables[1];
        var puesto4 = nombre[0];
        var puntaje4 = variables[0];
        // impresion en las cajas de entrada
        document.getElementById("pos1").value = "" + puesto1;
        document.getElementById("pun1").value = "" + puntaje1;
        document.getElementById("pos2").value = "" + puesto2;
        document.getElementById("pun2").value = "" + puntaje2;
        document.getElementById("pos3").value = "" + puesto3;
        document.getElementById("pun3").value = "" + puntaje3;
        document.getElementById("pos4").value = "" + puesto4;
        document.getElementById("pun4").value = "" + puntaje4;
    }
}

// funcion para reiniciar los valores de los controles y cajas
function reset() {
    document.getElementById("equipo1").value="";
    document.getElementById("equipo2").value="";
    document.getElementById("equipo3").value="";
    document.getElementById("equipo4").value="";
    document.getElementById("mrk12").value="0";
    document.getElementById("mrk21").value="0";
    document.getElementById("mrk34").value="0";
    document.getElementById("mrk43").value="0";
    document.getElementById("mrk13").value="0";
    document.getElementById("mrk31").value="0";
    document.getElementById("mrk24").value="0";
    document.getElementById("mrk42").value="0";
    document.getElementById("mrk32").value="0";
    document.getElementById("mrk23").value="0";
    document.getElementById("mrk41").value="0";
    document.getElementById("mrk14").value = "0";
    document.getElementById("pos1").value = "";
    document.getElementById("pun1").value = "";
    document.getElementById("pos2").value = "";
    document.getElementById("pun2").value = "";
    document.getElementById("pos3").value = "";
    document.getElementById("pun3").value = "";
    document.getElementById("pos4").value = "";
    document.getElementById("pun4").value = "";
}





