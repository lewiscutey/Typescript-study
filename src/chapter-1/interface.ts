interface List {
  readonly id: number,
  name: string,
  age? : number
  [x: string]: any
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(val => {
    console.log(val.id, val.name)
    // val.id = 3
    val.age = 2
  })
}

let result = {
  data: [
    {id: 1, name: 'a', sex: 'male'},
    {id: 2, name: 'b', age: 12}
  ]
}
render(result)

interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names {
  [x: string]: string
  // y: number
  [z: number]: string
}


type Add  = (x: number, y: number) => number
let add2: Add = (a, b) => a + b

interface Lib {
  (): void
  version: string
  doSomething(): void
}
function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib
}
let lib1 = getLib()
lib1.doSomething()
let lib2 = getLib()
lib2()