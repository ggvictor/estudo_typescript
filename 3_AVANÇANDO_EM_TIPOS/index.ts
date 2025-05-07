// 1 - arrays

let numbers : number[] = [1,2,3]

numbers.push(4)
console.log(numbers[2])

const nomes :string[] = ["Victor", "Matheus"]

// 2 - outra sintaxe de array
const nums: Array<number> = [1,2,3]
nums.push(300)

console.log(nums)

// 3 - any
const arr1:any =[1, "mamam",true,[],{}]

// 4 - parametros tipados
function soma(a:number,b:number){
    console.log(a + b)
}
soma(6, 9)

// 5 retorno de função
function greeting(name:string):string{
    return `Olá ${name}`
}
console.log(greeting("Victor"))

// 6-função anonima
setTimeout(function(){
    const sallary:number = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary)
},2000)

// 7- tipos de objetos
function passCoordinates(coord:{x:number, y:number}){
    console.log("X coordinates:" + coord.x)
    console.log("Y coordinates:" + coord.y)
}
const objCoord = {x:870, y:234.5}
passCoordinates(objCoord)

// 8 - props opicionais
function showNumbers(a:number, b:number,c?:number){
    console.log("A:" + a)
    console.log("B:" + b)
    if(c){
        console.log("C:" + c)
    }
}
showNumbers(1,2,3)
showNumbers(4,3)

// 9 - validando argumento opcional 
function advancedGreeting(firstName:string, lastName?:string){
    if(lastName !== undefined){
        return (`Olá ${firstName} ${lastName}, tudo bem?`)
    }
    return (`Olá ${firstName}, tudo bem?`)
}

console.log(advancedGreeting("Victor", "Rodrigues"))
console.log(advancedGreeting("mario"))

// 10 - union type
function showBalance(balance:string | number){
    console.log(`O saldo da conta é R$${balance}`)
}
console.log(showBalance(400))
console.log(showBalance("999"))

const arr2:Array<number | string> = [1,"opappap"]

// 11 - avançando em union types
function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario não aprovado!"
    }

    return `A função do usuario é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("admin"))
// 12 - type alias
type ID = string | number

function showId(id : ID){
    console.log(`o ID é: ${id}`)
}
showId(1)
showId("2")

// 13 - interfaces
interface Point {
    x: number
    y:number
    z:number
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
    x : 10,
    y : 20,
    z : 90
}

showCoords(coordObj)

// interface vs type alias 
interface Person{
    name:string
}
interface Person{
    age:number
}

const somePerson: Person = {name: "victor", age:21}
console.log(somePerson)

type personType = {
    name: string
}
// type personType = {
//     age:number
// }

// 15 - literal types

let test:"testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`a direção é: ${direction}`)
}
showDirection("left")

// 16 - non null aserttion operators
// const p = document.getElementById("some-p")

// console.log(p!.innerText)

// 17 - bigint
let n:bigint

// n = 1

n = 1000n
// 18 - symbol

let symbolA:symbol = Symbol("a")
let symbolb = Symbol("a")

console.log(symbolA == symbolb)
console.log(symbolA === symbolb)