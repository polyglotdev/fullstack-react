class Person {
  constructor() {}
  name: string
}

const jill: { name: string } = { name: 'Jill' }
const person: Person = jill
console.log(person)

let val: any = 22
val = `twenty-two`
val = new Array()
val.push(33)
console.log(val)
