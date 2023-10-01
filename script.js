let matriz = document.getElementById("matriz"); //Obtener el contenedor de las casillas
let restaurar = document.getElementById("restaurar");   //Obtener el botón de restaurar

function crearMatriz() {    //Función para crear de las casillas
    for (let i = 1; i < 51; i++){
        let cuadros = document.createElement("div"); //Crear un nuevo elemento div
        cuadros.style.width = '40px';   //Agregar algunos estilos a los cuadros o casillas
        cuadros.style.height = '40px';
        cuadros.style.backgroundColor = 'red';
        cuadros.classList.add("div" + i);   //Agregar un numero a la clase para identificar cada casilla o cuadro
        cuadros.style.borderRadius = '10px'
        cuadros.addEventListener("click", function(){   //Agregar un evento de click a cada casilla o cuadro
            let fila = Math.floor((i - 1) / 5) + 1; //Obtener la fila de la matriz
            let columna = (i - 1) % 5 + 1;  //Obtener la columna de la matriz
            
            if (cuadros.style.backgroundColor == 'red'){    //Agregar una condición
                this.style.backgroundColor = 'green';   //Agregar mas estilos si se cumple la condición 
                this.textContent = "X";
                this.style.display = 'flex';
                this.style.justifyContent = 'center';
                this.style.alignItems = 'center';
                for (let j = 1; j <= 5; j++) {  //Cambiar el color de las casillas o cuadros en la misma fila
                    let index = (fila - 1) * 5 + j;
                    let cuadroFila = document.querySelector(".div" + index);
                    cuadroFila.style.backgroundColor = cuadros.style.backgroundColor;
                }
                for (let j = 1; j <= 10; j++) { //Cambiar el color de las casillas o cuadros en la misma columna
                    let index = (columna - 1) + 5 * (j - 1) + 1;
                    let cuadroColumna = document.querySelector(".div" + index);
                    cuadroColumna.style.backgroundColor = cuadros.style.backgroundColor;
                }
            } else if (cuadros.style.backgroundColor == 'green'){   //Agregar otra condición en caso que la primera no se cumpla
                alert("Este espacio ya no esta disponible");    //Enviar una alerta para indicar que no esta disponible la casilla o cuadro
            }
        });
        matriz.appendChild(cuadros);    //Agregar las casillas o cuadros en el contenedor (matriz)
    }
}
crearMatriz()   //Llamar a la función para crear las casillas o cuadros al cargar la página

function restaurarCuadros() {   //Función para restablecer las casillas o cuadros a sus estilos iniciales
    for (let i = 1; i < 51; i++) {
      let cuadros = document.querySelector(".div" + i); //Obtener cada casilla o cuadros por su clase
      cuadros.style.backgroundColor = 'red';    //Restaurar el color de fondo a rojo
      cuadros.textContent = ''; //eliminar el texto de la casilla
    }
}

function cuadrosRandom() {  //Para seleccionar una casilla o cuadro aleatoriamente
    const divMatriz = matriz.querySelectorAll("div");   //Obtener todas las casillas o cuadros en el contenedor (matriz)
    let todosVerdes = true; //variable para verificar si todas las casillas están de color verde 

    divMatriz.forEach((div) => {    //Iterar sobre todas las casillas
        if (div.style.backgroundColor !== "green") {    //Agregar condición para saber si un div es diferente al color verde
            todosVerdes = false;    //Cambiar el estado a false en caso que la condición de arriba se cumpla 
            return; //Salir del bucle si encuentra un div que no está en verde
        }
    });

    if (todosVerdes) {  //Si todas las casillas están en verde o si (todosVerdes) es true
        alert("Todas las casillas ya están en verde");  //Enviar una alerta para indicar que todas las casillas o cuadros están de color verde o seleccionadas
        return; //No hacer nada si todos los cuadros o casillas esta están en verde o seleccionadas 
    }

    let numeroAleatorio;
    let cuadroAleatorio;

    do {
        numeroAleatorio = Math.floor(Math.random() * 50) + 1;   //Generar un numero aleatorio
        cuadroAleatorio = document.querySelector(".div" + numeroAleatorio); //Obtener las casilla con el numero aleatorio 
    } while (cuadroAleatorio.style.backgroundColor === "green"); //Repetir si ya está en verde

    let filaa = Math.floor((numeroAleatorio - 1) / 5) + 1;  //Calcular la fila de la casilla aleatoria
    let columnaa = (numeroAleatorio - 1) % 5 + 1;   //Calcular la Columna de la casilla aleatoria

    if (cuadroAleatorio.style.backgroundColor == 'red') {   //Agregar condición en caso que la casilla aleatoria sea de color rojo
        cuadroAleatorio.style.backgroundColor = 'green';    //Agrear estilos a las casillas aleatorias
        cuadroAleatorio.textContent = "X";
        cuadroAleatorio.style.display = 'flex';
        cuadroAleatorio.style.justifyContent = 'center';
        cuadroAleatorio.style.alignItems = 'center';

        for (let j = 1; j <= 5; j++) {  //Cambiar el color de las casillas aleatorias en la misma fila
            const index = (filaa - 1) * 5 + j;
            const cuadroFilaa = document.querySelector(".div" + index);
            cuadroFilaa.style.backgroundColor = cuadroAleatorio.style.backgroundColor;
        }
        for (let j = 1; j <= 10; j++) { //Cambiar el color de las casillas aleatorias en la misma columna
            const index = (columnaa - 1) + 5 * (j - 1) + 1;
            const cuadroColumnaa = document.querySelector(".div" + index);
            cuadroColumnaa.style.backgroundColor = cuadroAleatorio.style.backgroundColor;
        }
    } else if (cuadroAleatorio.style.backgroundColor == 'green') {  //Agregar otra condición en caso que la primera no se cumpla
        alert("Este espacio ya no esta disponible");    //Enviar una alerta para indicar que no esta disponible la casilla o cuadro
    }
}

def morse():
    global palabra

    while len(palabra) != 0:
        if len(palabra) > 0:
            cuatro = palabra[:4]
            tres = palabra[:3]
            dos = palabra[:2]
            uno = palabra[:1]
            if cuatro in inverso_codigo_morse:
                caracter4 =  inverso_codigo_morse[cuatro]
                conversion.append(caracter4)
                palabra = palabra[4:]
            elif tres in inverso_codigo_morse:
                caracter3 = inverso_codigo_morse[tres]
                conversion.append(caracter3)
                palabra = palabra[3:]
            elif dos in inverso_codigo_morse:
                caracter2 = inverso_codigo_morse[dos]
                conversion.append(caracter2)
                palabra = palabra[2:]
            elif uno in inverso_codigo_morse:
                caracter1 = inverso_codigo_morse[uno]
                conversion.append(caracter1)
                palabra = palabra[1:]

