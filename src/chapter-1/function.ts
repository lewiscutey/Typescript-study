function add3(x: number, y: number) {
  return x + y
}

let add4: (x:number, y:number) => number

type add5 = (x:number, y:number) => number

interface add6 {
  (x:number, y:number): number
}

// add3(1,2,3)

function add7(x:number, y?:number) {
  return y ? x + y : x
}

function add8(x: number, y = 0, z: number, w = 1) {
  console.log(x,y,z,w)
  return x + y + z + w
}
add8(1, undefined, 2)
console.log(add8(1, undefined, 2))

function add9(x: number, ...rest:number[]) {
  return x + rest.reduce((prev, curr) => prev + curr)
}
console.log(add9(1,2,3,4,5))

function add10(...rest: number[]): number
function add10(...rest: string[]): string
function add10(...rest: any[]): any {
  let first = rest[0]
  console.log(first)
  if (typeof first === 'string') {
    return rest.join('')
  }
  if(typeof first === 'number') {
    return rest.reduce((prev, curr) => prev + curr)
  }
}
console.log(add10(1,2,3))
console.log(add10('a', 'b', 'c'))