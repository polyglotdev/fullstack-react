let myVal: unknown = 22
myVal = `twenty-two`
myVal = new Array()

if (myVal instanceof Array) {
  myVal.push(33)
}

console.log(myVal)

let obj: { name: string } & { age: number } = {
  name: `Dominique Hallan`,
  age: 37
}

console.log(obj)

let unionObj: null | { name: string } = null
unionObj = { name: `Elijah Xavier Hallan` }
console.log(unionObj)

let literal: `Dom` | `Elijah` | `Ezra` | `Stephanie` = `Stephanie`
literal = `Ezra`
console.log(literal)

type Points = 20 | 30 | 40 | 50 | 60
let score: Points = 60

type ComplexPerson = {
  name: string
  age: number
  birthday: Date
  married: boolean
  address: string
}
