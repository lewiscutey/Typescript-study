let bool: boolean = true
let num: number | null = 12
// bool = 123

let arr1: number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3,'4']

let tuple: [number,string] = [0,'1']
// tuple.push(3)
// tuple[2]

let add = (x:number, y:number) => x + y
let add1 = (x:number, y:number):number => x + y
let compute: (x:number, y:number) => number
compute = (x,y) => x + y

let obj: object = {x: 1, y: 2}
let obj1: {x: number, y: number} = {x: 1, y: 2}
obj1.x = 23

let un: undefined = undefined
let nu: null = null
num = null

// void
let noReturn = () => {}

// any
let a 

// never
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}