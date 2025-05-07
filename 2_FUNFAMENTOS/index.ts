// 1 - Numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 4.99882

console.log(y)
console.log(typeof y)
console.log(y.toPrecision(3))

// 2 string
const firstName: string = "victor"
console.log(firstName.toLocaleUpperCase())

let fullName: string

const lastName: string = "Silva"

fullName = firstName +" " + lastName

console.log(fullName)

// 3 boolean 

let a: boolean = true

console.log(a)
console.log(typeof a)

// 4 - inference e annotation
const ann: string = "Teste"

let inf = "teste2"

// inf = 12
console.log("Testando")