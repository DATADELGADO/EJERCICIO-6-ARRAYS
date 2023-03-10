// ************************ EJERCICIOS NIVEL 1 *******************


// ********** #1 ************

// for (let index = 0; index < 11; index++) {
//     console.log(index);
// }
// let i = 0;
// while (i < 11) {
//     console.log(i);
//     i++;
// }
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 11);


// ********** #2 ************

// for (let index = 10; index >= 0; index--) {
//     console.log(index);
// }
// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }
// let j = 10;
// do {
//     console.log(j);
//     j--;
// } while (j >= 0);




// ********** #3 ************

// let n = 20;
// for (let index = 0; index <= n; index++) {
//     console.log(index);
// }

// ********** #4 ************

// let numeral = "#";
// for (let i = 0; i < 7; i++) {
//     console.log(numeral);
//     numeral = numeral + "#"
// }


// ********** #5 ************

// for (let i = 0; i < 11; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }


// ********** #6 ************

// for (let i = 0; i < 11; i++) {
//     if (i == 0) {
//         console.log("i  i^2  i^3");
//     }
//     console.log(`${i}  ${i ** 2}  ${i ** 3}`);
// }


// ********** #7 ************


// for (let i = 0; i < 101; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// ********** #8 ************


// for (let i = 0; i < 101; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }



// ********** #9 ************

// let array = []
// for (let i = 2; i < 101; i++) {
//     let bandera = false;
//     for (let j = 1; j <= i; j++) {
//         if (j != 1 && j != i) {
//             if (i % j == 0) {
//                 bandera = true;
//                 break;
//             }
//         }
//     }
//     if (!bandera) {
//         array.push(i);
//     }
// }
// console.log(array);

// *********** # 10 *************
// let suma = 0;
// for (let i = 0; i < 101; i++) {
//     suma = suma + i;
// }
// console.log(suma);



// *********** # 11 *************

// let sumaIm = 0;
// let sumaPa = 0;
// for (let i = 0; i < 101; i++) {
//     if (i % 2 == 0) {
//         sumaPa += i;
//     } else {
//         sumaIm += i;
//     }
// }

// console.log("impares: " + sumaIm);
// console.log("pares: " + sumaPa);



// *********** # 12 *************

// let sumaIm = 0;
// let sumaPa = 0;
// for (let i = 0; i < 101; i++) {
//     if (i % 2 == 0) {
//         sumaPa += i;
//     } else {
//         sumaIm += i;
//     }
// }

// let matriz = [sumaPa, sumaIm]



// *********** # 13 *************

// let matriz = []
// for (let i = 0; i < 5; i++) {
//     matriz.push(Math.floor(Math.random() * 10))
// }
// console.log(matriz);


// *********** # 14 *************

// let matriz = []
// for (let i = 0; i < 5; i++) {
//     if (i == 0) {
//         matriz.push(Math.floor(Math.random() * 10))
//         continue;
//     }
//     for (let j = 0; j < 5; j++) {
//         let numeAlea = Math.floor(Math.random() * 10);
//         if (!(matriz.includes(numeAlea))) {
//             matriz.push(numeAlea)
//             break;
//         }
//     }
// }
// console.log(matriz);


// *********** # 15 *************

// let cadena = "abcdefghijkmnlñopqrstuvwxyz";
// let script = "";
// for (let i = 0; i < 6; i++) {
//     if (Math.round(Math.random() * 2) == 1) {
//         script = script + cadena[Math.round(Math.random() * cadena.length - 1)]
//     } else {
//         script = script + Math.floor(Math.random() * 9);
//     }
// }
// console.log(script);



// ************************ EJERCICIOS NIVEL 2 *******************

// *********** # 1 *************

// let cadena = "abcdefghijkmnlñopqrstuvwxyz";
// let script = "";
// let numeroRandom = Math.round(Math.random() * 100);
// for (let i = 0; i < numeroRandom; i++) {
//     if (Math.round(Math.random() * 2) == 1) {
//         script = script + cadena[Math.round(Math.random() * cadena.length - 1)]
//     } else {
//         script = script + Math.floor(Math.random() * 9);
//     }
// }
// console.log(script);



// *********** # 2 *************

// let cadena = "abcdef";
// let numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let script = "";
// let numeroRandom = Math.round(Math.random() * 20);
// for (let i = 0; i < numeroRandom; i++) {
//     if (Math.round(Math.random() * 2) == 1) {
//         script = script + cadena[Math.round(Math.random() * cadena.length - 1)]
//     } else {
//         script = script + numeritos[Math.round(Math.random() * numeritos.length - 1)]
//     }
// }
// console.log(script);


// *********** # 3 *************

// let colores = [];
// for (let i = 0; i < 3; i++) {
//     colores.push(Math.round(Math.random() * 255))
// }
// console.log(`rgb(${colores[0]},${colores[1]},${colores[2]})`);


// *********** # 4 *************

// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
// ];

// for (let i = 0; i < countries.length; i++) {
//     countries[i] = countries[i].toLocaleUpperCase();
// }
// console.log(countries);



// *********** # 5*************

// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
// ];

// let countriesLon = [];

// for (let i = 0; i < countries.length; i++) {
//     countriesLon.push(countries[i].length)
// }

// console.log(countriesLon);


// *********** # 6*************

// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
// ];

// let principal = [];
// for (let i = 0; i < countries.length; i++) {
//     principal.push([countries[i], countries[i].slice(0, 3).toLocaleUpperCase(), countries[i].length])
// }
// console.log(principal);


// *********** # 7*************

// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
// ];

// let array = [];
// let contador = 0;
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].includes('land')) {
//         array.push(countries[i])
//     } else {
//         contador++;
//     }
// }

// if (contador == countries.length) {
//     console.log('Estos países no terminan con ia');
// } else {
//     console.log(array);
// }


// *********** # 8*************

// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
// ];

// let array = [];
// let contador = 0;
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].endsWith('ia')) {
//         array.push(countries[i])
//     } else {
//         contador++;
//     }
// }
// if (contador == countries.length) {
//     console.log('Estos países no terminan con ia');
// } else {
//     console.log(array);
// }


// *********** # 9*************

// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
// ];

// let mayor = 0;
// let indice = 0;
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length > mayor) {
//         mayor = countries[i].length;
//         indice = countries.indexOf(countries[i]);
//     }
// }
// console.log(countries[indice]);



// *********** # 10*************


// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
// ];


// let indices = [];
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length == 5) {
//         indices.push(countries[i]);
//     }
// }
// console.log(indices);



// *********** # 11*************

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
// ];


// let mayor = 0;
// let indice = 0;
// for (let i = 0; i < webTechs.length; i++) {
//     if (webTechs[i].length > mayor) {
//         mayor = webTechs[i].length;
//         indice = webTechs.indexOf(webTechs[i]);
//     }
// }
// console.log(webTechs[indice]);



// *********** # 12*************


// const webTechs = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
// ];

// let array = []


// for (let i = 0; i < webTechs.length; i++) {
//     array.push([webTechs[i], webTechs[i].length])
// }
// console.log(array
// );



// *********** # 13*************

