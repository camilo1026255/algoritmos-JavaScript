// Función para sumar dos números dados por el usuario
function suma() {
    let numero1 = parseInt(prompt('Ingrese el primer número: '));
    let numero2 = parseInt(prompt('Ingrese el segundo número: '));
    let resultado = numero1 + numero2;
    console.log(`La suma es ${resultado}`);
    alert(`La suma es ${resultado}`);
}

// Función para realizar operaciones matemáticas básicas
function operacionMatematicas() {
    let numero1 = parseInt(prompt('Ingrese el primer número: '));
    let numero2 = parseInt(prompt('Ingrese el segundo número: '));
    let resultados = {
        suma: numero1 + numero2,
        resta: numero1 - numero2,
        multiplicacion: numero1 * numero2,
        division: numero1 / numero2
    };
    console.log(resultados);
    alert(`Resultados: 
        Suma = ${resultados.suma},
        Resta = ${resultados.resta},
        Multiplicación = ${resultados.multiplicacion},
        División = ${resultados.division}`);
}

// Función para calcular el cuadrado de un número
function cuadrado() {
    let numero = parseInt(prompt('Ingrese un número: '));
    let resultado = numero ** 2;
    console.log(`El cuadrado es ${resultado}`);
    alert(`El cuadrado es ${resultado}`);
}

// Función para calcular el área de un triángulo
function areaTriangulo() {
    let base = parseFloat(prompt('Ingrese la base del triángulo (cm): '));
    let altura = parseFloat(prompt('Ingrese la altura del triángulo (cm): '));
    let area = (base * altura) / 2;
    console.log(`El área del triángulo es ${area} cm²`);
    alert(`El área del triángulo es ${area} cm²`);
}

// Función para convertir centímetros a otras unidades
function conversionMedidas() {
    let medida = parseFloat(prompt('Ingrese la medida en centímetros (cm): '));
    let conversiones = {
        kilometros: medida * 0.00001,
        pulgadas: medida * 0.3937,
        metros: medida * 0.01
    };
    console.log(conversiones);
    alert(`${medida} cm son: 
        ${conversiones.kilometros} km,
        ${conversiones.pulgadas} in,
        ${conversiones.metros} m`);
}

// Función para determinar el número mayor entre dos
function numeroMayor() {
    let numero1 = parseInt(prompt('Ingrese el primer número: '));
    let numero2 = parseInt(prompt('Ingrese el segundo número: '));
    let mayor = numero1 >= numero2 ? numero1 : numero2;
    console.log(`El número mayor es ${mayor}`);
    alert(`El número mayor es ${mayor}`);
}

// Función para determinar el menor entre tres números
function menorTres() {
    let numeros = [
        parseInt(prompt('Ingrese el primer número: ')),
        parseInt(prompt('Ingrese el segundo número: ')),
        parseInt(prompt('Ingrese el tercer número: '))
    ];
    let menor = Math.min(...numeros);
    console.log(`El número menor es ${menor}`);
    alert(`El número menor es ${menor}`);
}

// Función para evaluar si un estudiante aprueba una materia
function aprobarMateria() {
    const numeroNotas = 8;
    let nombre = prompt('Ingrese su nombre: ');
    let materia = prompt('Ingrese la materia: ');
    let sumaNotas = 0;

    for (let i = 0; i < numeroNotas; i++) {
        sumaNotas += parseFloat(prompt(`Ingrese la nota ${i + 1}: `));
    }

    let promedio = sumaNotas / numeroNotas;
    let mensaje = promedio >= 6.2
        ? `${nombre}, felicidades, aprobaste ${materia} con un promedio de ${promedio}`
        : `${nombre}, no aprobaste ${materia}. Tu promedio fue de ${promedio}`;
    alert(mensaje);
}

// Función para verificar si un número es par o impar
function parImpar() {
    let numero = parseInt(prompt('Ingrese un número: '));
    let resultado = numero % 2 === 0 ? 'par' : 'impar';
    console.log(`El número es ${resultado}`);
    alert(`El número es ${resultado}`);
}

// Función para calcular beneficios de una inversión bancaria
function calcularBeneficio() {
    let capitalInicial = parseFloat(prompt('Ingrese el capital inicial ($): '));
    let años = parseInt(prompt('Ingrese el número de años: '));
    let meses = años * 12;
    let interesMensual = 0.007;
    let beneficio = capitalInicial * interesMensual * meses;
    let capitalFinal = capitalInicial + beneficio;
    console.log(`Beneficio: $${beneficio}, Capital final: $${capitalFinal}`);
    alert(`El beneficio es $${beneficio} y el capital final es $${capitalFinal}`);
}
// funcion de calcular dias
function calcularDiasEntreFechas() {
    let fecha1 = new Date(prompt('Ingrese la primera fecha (YYYY-MM-DD): '));
    let fecha2 = new Date(prompt('Ingrese la segunda fecha (YYYY-MM-DD): '));

    let diferencia = Math.abs(fecha2 - fecha1);
    let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    console.log(`La diferencia entre las fechas es de ${dias} día(s)`);
    alert(`La diferencia entre las fechas es de ${dias} día(s)`);
}

// Función para ordenar numeros
function ordenarNumeros() {
    let numeros = prompt('Ingrese números separados por comas: ').split(',').map(Number);
    numeros.sort((a, b) => a - b);

    console.log(`Números ordenados: ${numeros.join(', ')}`);
    alert(`Números ordenados: ${numeros.join(', ')}`);
}

// Función para Contar la cantidad de vocales en una cadena
function contarVocales() {
    let cadena = prompt('Ingrese una cadena: ').toLowerCase();
    let vocales = cadena.match(/[aeiou]/g);
    let cantidad = vocales ? vocales.length : 0;

    console.log(`La cadena tiene ${cantidad} vocal(es)`);
    alert(`La cadena tiene ${cantidad} vocal(es)`);
}

//Calcula la potencia de un número.

function potencia() {
    let base = prompt("Ingresa la base:");
    let exponente = prompt("Ingresa el exponente:");
    let resultado = Math.pow(base, exponente);
    alert(`${base} elevado a ${exponente} es ${resultado}`);
}

//Genera una secuencia de Fibonacci hasta un número máximo.
function fibonacci() {
    let limite = prompt("Ingresa el límite:");
    let a = 0, b = 1, resultado = [0, 1];
    while (b < limite) {
        [a, b] = [b, a + b];
        if (b < limite) resultado.push(b);
    }
    alert(`Serie de Fibonacci: ${resultado.join(", ")}`);
}

//convierte a numeros romanos 

function convertirARomanos() {
    let num = parseInt(prompt("Ingresa un número (1-3999):"));
    if (num < 1 || num > 3999) return alert("Número fuera de rango.");

    let romanos = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], 
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];

    let resultado = "";
    for (let [letra, valor] of romanos) {
        while (num >= valor) {
            resultado += letra;
            num -= valor;
        }
    }
    alert(`El número en romanos es: ${resultado}`);
}

//piedra, papel  o tijera 

function piedraPapelTijera() {
    let opciones = ["piedra", "papel", "tijera"];
    let usuario = prompt("Elige: piedra, papel o tijera:").toLowerCase();
    let computadora = opciones[Math.floor(Math.random() * 3)];
    
    if (usuario === computadora) {
        alert(`Empate. Ambos eligieron ${usuario}.`);
    } else if (
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "papel" && computadora === "piedra") ||
        (usuario === "tijera" && computadora === "papel")
    ) {
        alert(`Ganaste. Tú: ${usuario}, Computadora: ${computadora}.`);
    } else {
        alert(`Perdiste. Tú: ${usuario}, Computadora: ${computadora}.`);
    }
}
