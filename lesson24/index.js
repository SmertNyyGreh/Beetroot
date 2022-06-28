// 1)1. function declaration
// const a = prompt("Введіть перше число");
// const b = prompt("Введіть друге число");

// function difference(num1, num2) {
//   if (num1 > num2) {
//     return num1 - num2;
//   } else if (num2 > num1) {
//     return num2 - num1;
//   } else a == NaN || b == NaN ('Вводіть тільки числа');
// }

// difference(a, b);
// console.log(difference(a, b));

// 1)2. function expretion
// const a = prompt("Введіть перше число");
// const b = prompt("Введіть друге число");

// const seachKeyWord = function(num1, num2) {
//   if (num1 > num2) {
//     return num1 - num2;
//   } else if (num2 > num1) {
//     return num2 - num1;
//   } else a == NaN || b == NaN ('Вводіть тільки числа');
// }
// console.log(seachKeyWord(text));

// difference(a, b);
// console.log(difference(a, b));

// 1)3. arrow function
// const a = prompt("Введіть перше число");
// const b = prompt("Введіть друге число");

// let difference = (num1, num2) => {
//   if (num1 > num2) {
//     return num1 - num2;
//   } else if (num2 > num1) {
//     return num2 - num1;
//   }
// }

// difference(a, b);
// console.log(difference(a, b));

// 2.
// const argumNum1 = prompt("Введіть аргумент число:");
// const argumStr1 = prompt("Введіть аргумент строка:");
// const argumStr2 = prompt("Введіть аргумент строка:");
// const argumNum2 = prompt("Введіть аргумент число:");
// const argumNum3 = prompt("Введіть аргумент число:");

// let numberOfArguments = function(...numberOfArguments) {
//    console.log('Метод 1:', arguments.length);
//    console.log('Метод 2:', numberOfArguments.length)
// }

// numberOfArguments(argumNum1, argumStr1, argumStr2, argumNum2, argumNum3);

// 3.
// const number1 = prompt('Введіть число 1');
// const number2 = prompt('Введіть число 2');

// let returnValue = (arg1, arg2) => {
//    if(arg1 < arg2){
//       return -1;
//    } else if(arg1 > arg2) {
//       return 1;
//    } else if(arg1 = arg2) {
//       return 0;
//    }
// }

// let result = returnValue(number1, number2);
// console.log(result)

// 4.-

// 5.
// const number1 = prompt('Введіть число 1');
// const number2 = prompt('Введіть число 2');
// const number3 = prompt('Введіть число 3');

// let addingNumbersToAString = (numstr1, numstr2, numstr3) => {
//    let addition = numstr1 + numstr2 + numstr3;
//    return +addition;
// }

// let resultnumber = addingNumbersToAString(number1, number2, number3);
// console.log(resultnumber);
// console.log(typeof resultnumber);

// let wigth = +prompt('Введіть ширину:');
// let length = +prompt('Введіть довжину:');

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// function calculateTheRectangle(wigth, length){
//    if(wigth != 0 && length != 0){
//    const sum = wigth * length;
//    console.log(`Площа вашого прямокутника становить: ${sum}`);
//    } else if(wigth == 0 || length == 0){
//       if(wigth != 0){
//          let res = wigth * wigth;
//          console.log(`Площа вашого прямокутника становить: ${res}`);
//       } else if(length != 0) {
//          let res = length * length;
//          console.log(`Площа вашого прямокутника становить: ${res}`);
//       }
//    }
// }
// calculateTheRectangle(wigth, length);

// let userNumber = prompt("Ведіть число");

// let partition;
// let k = 0;

// for (let i = 0; i < userNumber; i++) {
//   function checker(i, userNumber) {
//     partition = userNumber % i;
//     return partition;
//   }
//   checker(i, userNumber);

//   if (partition == 0) {
//     k += i;
//   }
// }
// if (k == userNumber) {
//   console.log("ТИ ЗМІГ АХАХАХАХАХ");
// }
