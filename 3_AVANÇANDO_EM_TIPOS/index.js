"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);
const nomes = ["Victor", "Matheus"];
// 2 - outra sintaxe de array
const nums = [1, 2, 3];
nums.push(300);
console.log(nums);
// 3 - any
const arr1 = [1, "mamam", true, [], {}];
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(6, 9);
// 5 retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Victor"));
// 6-função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);
// 7- tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates:" + coord.x);
    console.log("Y coordinates:" + coord.y);
}
const objCoord = { x: 870, y: 234.5 };
passCoordinates(objCoord);
// 8 - props opicionais
function showNumbers(a, b, c) {
    console.log("A:" + a);
    console.log("B:" + b);
    if (c) {
        console.log("C:" + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 3);
// 9 - validando argumento opcional 
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá ${firstName}, tudo bem?`);
}
console.log(advancedGreeting("Victor", "Rodrigues"));
console.log(advancedGreeting("mario"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
console.log(showBalance(400));
console.log(showBalance("999"));
const arr2 = [1, "opappap"];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return `A função do usuario é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(`o ID é: ${id}`);
}
showId(1);
showId("2");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 90
};
showCoords(coordObj);
const somePerson = { name: "victor", age: 21 };
console.log(somePerson);
// type personType = {
//     age:number
// }
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`a direção é: ${direction}`);
}
showDirection("left");
// 16 - non null aserttion operators
// const p = document.getElementById("some-p")
// console.log(p!.innerText)
// 17 - bigint
let n;
// n = 1
n = 1000n;
// 18 - symbol
let symbolA = Symbol("a");
let symbolb = Symbol("a");
console.log(symbolA == symbolb);
console.log(symbolA === symbolb);
