interface User {
  name: string
  age: number
}

function canDrive(usr: User) {
  console.log(`usr is ${usr.name}`)

  if (usr.age >= 16) {
    console.log(`allowed to drive`)
  } else {
    console.log(`not allowed to drive`)
  }
}

const dom: User = { name: `Dom`, age: 16 }

canDrive(dom)
