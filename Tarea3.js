// 1. Crea una función nombrada que sume dos números.
function suma(a,b){
    let sumas = a + b
    return sumas
}
console.log(suma(1,2))

//2. Escribe una función nombrada que reste dos números.
function resta(c,d){
    let restas = c - d
    return restas
}
console.log(resta(12,8))

//3. Desarrolla una función nombrada que multiplique dos números.
function multiplicacion(n1,n2){
    let multiplique = n1 * n2
    return multiplique
}
console.log(multiplicacion(9,8))

//4. Implementa una función nombrada que divida dos números.
function divide(n3,n4){
    let divida = n3 / n4
    return divida
}
console.log(divide(12,3))

//5. Diseña una función nombrada que calcule el módulo de dos números.
function modulo(n,m){
    let modu = n % m
    return modu
}
console.log(modulo(12,5))

//6. Asigna una función anónima a una variable que eleve un número al cuadrado.
let fun = function cuadrado(num){
    op = num * num
    return op
}
console.log(fun(7))

//7. Usa una función anónima para convertir grados Celsius a Fahrenheit.
let CF = function cfr(Celsius){
    fahrenheit = (Celsius * 9/5) + 32
    return fahrenheit
}
console.log(CF(23))

//8. Crea una función anónima que calcule el perímetro de un rectángulo.
let per = function perimetro(l1,l2,l3,l4){
    perimetror = l1 + l2 + l3 + l4
    return perimetror
}
console.log(per(2,2,5,5))

//9. Implementa una función anónima que determine si un número es par o impar.
let poi = function par(numA){
    return numA % 2 == 0 ? numA + " Es par" : numA + " Es negativo"
}
console.log(poi(4))

//10. Escribe una función anónima que devuelva el número mayor entre dos números.
let may = function mayor(numB,numC){
    return numB > numC ? numB : numC
}
console.log(may(4,7))

//11. Desarrolla una función flecha que calcule el área de un círculo.
const acirc = (radio) => Math.PI * radio * radio
console.log(acirc(24))

//12. Crea una función flecha que convierta kilómetros a millas.
const KlMl = (longitud) => longitud / 1.609344
console.log(KlMl(24))

//13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido.
const nam = (nombre, apellido) => nombre + "" + apellido
console.log(nam("Carlos ", "Guerrero"))

//14. Implementa una función flecha que verifique si un texto contiene la letra 'a'.
const texto = (textos) => textos.includes("a")
console.log(texto("hola"))

//15. Diseña una función flecha que cuente cuántos elementos en un array son números.
const nums = (nums) => nums.filter(i => typeof i === "number").length;
console.log(nums([1,2,3,4,"hola",4,5]))

//16. Escribe una función de orden superior que tome una función y la aplique a todos los 
//elementos de un array.
const asup = (ar, fun)=>{
    return ar.map(fun)
}
const multiplicar = (nC) => nC * 4
const numss1 = [1,2,3,4,5]
const resp = asup(numss1 , multiplicar);
console.log(resp)

//17. Crea una función de orden superior que filtre elementos de un array basándose en una 
//condición dada.
const fl = (arr, fun1)=>{
    return arr.filter(fun1)
}
const multiplos = (Nm) => Nm % 2 == 0
const elem = [1,2,3,4,5,6]
const resp17 = fl(elem, multiplos);
console.log(resp17)

//18. Desarrolla una función de orden superior que retorne una nueva función 
//incrementadora.
const fl1 = (inc) =>{
    return (n) => n + inc
}
const inc2 = fl1(2);
console.log(inc2(5))

//19. Implementa una función de orden superior que tome dos funciones como argumentos 
//y elija una para ejecutar basada en una condición.
const selfun = (c, fn1, fn2)=>{
    return c ? fn1() : fn2()
}
const saludo = () => ("Hola, que tal")
const despedida = () => ("Hasta la proxima")
const usaludo = true
const resp19 = selfun(usaludo, saludo, despedida)
console.log(resp19)

//20. Diseña una función de orden superior que modifique un objeto utilizando otra función 
//proporcionada.
const modificarObjeto = (objeto, modificarFunc) => {
    return modificarFunc(objeto); 
};

const agregarPropiedad = (obj) => {
    obj.Gustos = "Me gustan las motos";
    return obj; 
};

const objetoSA = {
    nombre: "Samuel Guerrero",
    edad: 19
};

const objetoModificado = modificarObjeto(objetoSA, agregarPropiedad);

console.log(objetoModificado);

//21. Define una función constructora para un objeto "Coche" que tenga propiedades como 
//marca, modelo y año.
function coche(marca,modelo,año){
    this.marca = marca
    this.modelo = modelo
    this.año = año
}
const coche1 = new coche("Mitshubishi", "Lancer Evo X", 2005)
console.log(coche1)

//22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título 
//y año de publicación.
function libro(autor, titulo, AñoDePublicacion){
    this.autor = autor
    this.titulo = titulo
    this.AñoDePublicacion = AñoDePublicacion
}
const libro1 = new libro("Sun Tzu", "El Arte de la Guerra", 5)
console.log(libro1)

//23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo 
//electrónico y contraseña.
function usuario(nombre, correo, contraseña){
    this.nombre = nombre
    this.correo = correo
    this.contraseña = contraseña
}
const usuario1 = new usuario("Jose Antonio", "pepeg86@gmail.com", "pepetoño123")
console.log(usuario1)

//24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y 
//cantidad.
function producto(nombre, precio, cantidad){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}
const producto1 = new producto("Doritos", 0.75, "100 gramos")
console.log(producto1)

//25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, 
//matrícula y carrera.
function estudiante(nombre, matricula, carrera){
    this.nombre = nombre
    this.matricula = matricula
    this.carrera = carrera
}
const estudiante1 = new estudiante("Samuel Guerrero", "Ordinaria", "Ingenieria en Software")
console.log(estudiante1)

//26. Escribe una función recursiva para calcular el factorial de un número.
function factorial(num){
    if(num === 0){
        return 1
    }
    return  num * factorial(num - 1)
}
console.log(factorial(7))

//27. Crea una función recursiva que sume todos los números hasta un número dado.
function sumaR(num){
    if(num === 1){
        return 1
    }
    return num + sumaR(num - 1)
}
console.log(sumaR(5))
///implementa una funcion recursiva que encuentre al maximo comun divisor de dos numeros
function recursiva3(a,b){
if(b == 0){
    return a
} else {
    return recursiva3(b,a % b)
}
}
console.log(recursiva3(12,21))

//diseña una funcion recursiva que genere la secuencia de fibonacci hasta un numero especifico
function recursiva4 (n){
    if(n<=1){
        return 1
    } else{
        return recursiva4(n - 1) + recursiva4(n - 3)
    }
    
    }
    for(i = 1; i <= 10; i++){
        console.log(recursiva4(i))
}

//desarrolla una funcion recursiva que invierta una cadena de texto
function recursiva5(texto, i = null){
    if (i === null){
        i = texto.length - 1
    }
    if (i < 0 ){
        return ''
    }
    return texto[i] + recursiva5(texto, i - 1)
}
console.log(recursiva5("Hola"))

//demuestra el uso de una variable global modificandola dentro de una funcion
let x = 10
function a (){
    x = x + 5
}
console.log(x)
a()
console.log(x)

//escribe un codigo donde una variable local  oculte una variable global del mismo nombre
let c = 5
function b() {
    let c = 10
}
console.log(c)
b()
console.log(x)

//explica mediante un ejemplo como las variables locales pueden evitar conflictos de nombres
function suma () {
    let resultado
    return resultado = 5 + 2
}
console.log(suma())
function rest(){
    let resultado
    return resultado = 5 - 3
}
console.log(rest())

//Implementa un contador utilizando una variable global
// Variable global para el contador
let contador = 0;

// Función para incrementar el contador
function incrementarContador() {
    contador++;
    console.log("Contador: " + contador);
}

function decrementarContador() {
    contador--;
    console.log("Contador: " + contador);
}

function reiniciarContador() {
    contador = 0;
    console.log("Contador reiniciado a: " + contador);
}

incrementarContador();
incrementarContador(); 
decrementarContador(); 
reiniciarContador();   

//Crea una función que intente modificar una variable local definida en otra función.
function funcionExterna() {
    let variableLocal = 10; 

    function funcionInterna() {

        variableLocal += 5; 
        console.log("Desde funcionInterna: " + variableLocal); 
    }

    funcionInterna(); // Llamamos a funcionInterna
    console.log("Desde funcionExterna: " + variableLocal);
}

funcionExterna();

//Escribe una función que determine si un año es bisiesto
function bisiesto (año){
    return año % 400 == 0 ? `es un año bisiesto` : año %  100 == 0 ? `no es un año bisiesto` : año % 4 == 0 ? `es año bisiesto` : `no es un año bisiesto`
}
console.log(bisiesto(2020))

//Implementa una función que evalúe tres números y retorne el mayor
function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(mayorDeTres(10, 20, 5)); 
console.log(mayorDeTres(-1, -5, -3)); 
console.log(mayorDeTres(7, 7, 7)); 

// Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.
function evaluarEstudiante(nota) {
    if (nota >= 6) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
console.log(evaluarEstudiante(7)); 
console.log(evaluarEstudiante(5)); 
console.log(evaluarEstudiante(6)); 

//Crea una función que clasifique una edad en categorías (niño, adolescente, adulto,anciano
function clasificarEdad(edad) {
    if (edad < 0) {
        return "Edad no válida";
    } else if (edad <= 12) {
        return "Niño";
    } else if (edad <= 17) {
        return "Adolescente";
    } else if (edad <= 64) {
        return "Adulto";
    } else {
        return "Anciano";
    }
}
console.log(clasificarEdad(10)); 
console.log(clasificarEdad(15)); 
console.log(clasificarEdad(30)); 
console.log(clasificarEdad(70)); 

// Desarrolla una función que verifique si un usuario tiene acceso basado en su edad
function verificarAcceso(edad) {
    const edadMinima = 18; 

    if (edad >= edadMinima) {
        return "Acceso permitido";
    } else {
        return "Acceso denegado";
    }
}

console.log(verificarAcceso(20)); 
console.log(verificarAcceso(16)); 
console.log(verificarAcceso(18)); 

// Escribe un bucle while que cuente de 1 a 100
let conta = 1;

while (conta <= 100) {
    console.log(conta);
    conta++;
}

//. Implementa un bucle while que sume los primeros 50 números naturales.
let cont = 1;
let sum = 0;

while (cont <= 50) {
    sum += cont;
    cont++;     
}

console.log("La suma de los primeros 50 números naturales es: " + sum);

//Crea un bucle while que repita un saludo hasta que el usuario decida parar.

let usuar = "Juan"
let rep = 4
while(rep > 0){
    console.log("Hola"+ usuar)
    rep --
}

//Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango.
let inicio = 1; 
let fin = 100;  

let numero = inicio;

while (numero <= fin) {
    if (numero % 7 === 0) {
        console.log(`El primer número divisible por 7 es: ${numero}`);
        break;
    }
    numero++;
}

//Diseña un bucle while que verifique la entrada del usuario hasta que sea válida
function validar_entrada(entrada){
    while(entrada!= "Hola"){
        return "Ingrese la palabra hola"
    }
    return "Hola"
}

//Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos.
function asignarCalificacion(puntos) {
    let calificacion;

    switch (true) {
        case (puntos >= 90):
            calificacion = 'A';
            break;
        case (puntos >= 80):
            calificacion = 'B';
            break;
        case (puntos >= 70):
            calificacion = 'C';
            break;
        case (puntos >= 60):
            calificacion = 'D';
            break;
        default:
            calificacion = 'F';
    }

    return calificacion;
}

console.log(asignarCalificacion(85));

//Implementa una función que use switch para responder a diferentes comandos de un chatbot.
function responderComando(comando) {
    let respuesta;

    switch (comando.toLowerCase()) {
        case 'hola':
            respuesta = '¡Hola! ¿Cómo puedo ayudarte hoy?';
            break;
        case 'ayuda':
            respuesta = 'Claro, ¿en qué necesitas ayuda?';
            break;
        case 'adiós':
            respuesta = '¡Hasta luego! Que tengas un buen día.';
            break;
        case 'información':
            respuesta = 'Aquí tienes información sobre nuestros servicios.';
            break;
        default:
            respuesta = 'Lo siento, no entiendo ese comando.';
    }

    return respuesta;
}

console.log(responderComando('Hola'));

//Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta,cheque).
function procesarPago(metodo) {
    let mensaje;

    switch (metodo.toLowerCase()) {
        case 'efectivo':
            mensaje = 'Has elegido pagar en efectivo. Por favor, entrega el monto al cajero.';
            break;
        case 'tarjeta':
            mensaje = 'Has elegido pagar con tarjeta. Por favor, inserta tu tarjeta en la terminal.';
            break;
        case 'cheque':
            mensaje = 'Has elegido pagar con cheque. Asegúrate de que esté firmado.';
            break;
        default:
            mensaje = 'Método de pago no reconocido. Por favor, elige efectivo, tarjeta o cheque.';
    }

    return mensaje;
}

console.log(procesarPago('tarjeta')); 

//Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).
function calcular(num1, num2, operacion) {
    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return 'Error: No se puede dividir entre cero.';
            }
            break;
        default:
            return 'Error: Operación no válida. Usa +, -, * o /.';
    }

    return resultado;
}

console.log(calcular(10, 5, '+'));  
console.log(calcular(10, 5, '-'));  
console.log(calcular(10, 5, '*'));  
console.log(calcular(10, 5, '/'));  
console.log(calcular(10, 0, '/')); 

//Diseña un switch para cambiar entre diferentes idiomas de un sitio web
function cambiarIdioma(idioma) {
    let saludo;

    switch (idioma.toLowerCase()) {
        case 'es':
            saludo = '¡Hola! Bienvenido a nuestro sitio web.';
            break;
        case 'en':
            saludo = 'Hello! Welcome to our website.';
            break;
        case 'fr':
            saludo = 'Bonjour! Bienvenue sur notre site web.';
            break;
        case 'de':
            saludo = 'Hallo! Willkommen auf unserer Webseite.';
            break;
        case 'it':
            saludo = 'Ciao! Benvenuto nel nostro sito web.';
            break;
        default:
            saludo = 'Idioma no reconocido. Por favor, selecciona un idioma válido.';
    }

    return saludo;
}

console.log(cambiarIdioma('es')); 
console.log(cambiarIdioma('en')); 
console.log(cambiarIdioma('fr'));

//mplementa un bucle for que imprima todos los elementos de un array.
const elementos = ['manzana', 'banana', 'cereza', 'dátil', 'higo'];

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
}

//Escribe un bucle for que multiplique todos los elementos de un array.
const numeros = [2, 3, 4, 5];
let pro = 1

for (let i = 0; i < numeros.length; i++) {
    pro *= numeros[i];
}

console.log(`El producto de los elementos es: ${pro}`);

//Crea un bucle for para encontrar el menor número en un array.
const numer= [34, 15, 88, 2, 19];
let menor = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log(`El menor número en el array es: ${menor}`);

//Desarrolla un bucle for para verificar si un array contiene un elemento específico
const element = ['manzana', 'banana', 'cereza', 'dátil'];
const buscar = 'cereza'; 
let encontrado = false; 

for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === buscar) {
        encontrado = true; 
        break;
    }
}

if (encontrado) {
    console.log(`${buscar} se encuentra en el array.`);
} else {
    console.log(`${buscar} no se encuentra en el array.`);
}

//Diseña un bucle for que copie un array en otro.
const original = ['manzana', 'banana', 'cereza', 'dátil'];
const copia = []; 

for (let i = 0; i < original.length; i++) {
    copia[i] = original[i]; 
}

console.log('Array original:', original);
console.log('Array copia:', copia);

//Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea mayor que 10.
function user_m (numero) {
    let numer = []
    do{
        console.log("Ingrese numero")
        numer.push(numero)
    } while (numero < 10)
        return numer
}

//. Implementa un for-in para mostrar todas las propiedades de un objeto.
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    ocupacion: 'Desarrollador'
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
const nombres = ['Ana', 'Luis', 'Pedro', 'María'];

for (const nombre of nombres) {
    console.log(`¡Hola, ${nombre}!`);
}

//Crea un forEach para aplicar un descuento del 10% a precios en un array.
const precios = [100, 200, 300, 400];
const descuento = 0.10; 

const preciosConDescuento = [];

precios.forEach(precio => {
    const nuevoPrecio = precio - (precio * descuento); 
    preciosConDescuento.push(nuevoPrecio); 
});

console.log('Precios originales:', precios);
console.log('Precios con descuento:', preciosConDescuento);

//Escribe un código que use map para convertir todas las temperaturas de un array de Celsius a Fahrenheit.
const temperaturasCelsius = [0, 20, 30, 100];

const temperaturasFahrenheit = temperaturasCelsius.map(celsius => {
    return (celsius * 9/5) + 32; 
});

console.log('Temperaturas en Celsius:', temperaturasCelsius);
console.log('Temperaturas en Fahrenheit:', temperaturasFahrenheit);