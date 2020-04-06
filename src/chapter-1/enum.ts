enum Role {
  Reporter = 1,
  Developer,
  Maintanier,
  Owner,
  Guest
}
console.log(Role)
console.log(Role.Developer)

enum Message {
  Success = 'sunccess',
  Fail = 'fali'
}
console.log(Message)

enum char {
  // const
  a,
  b = char.a,
  c = 1 + 2,
  // computed
  d = Math.random(),
  e = '123'.length
}
console.log(char)

enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'a', b = 'b'}

let e: E = 3
let f: F = 3
// e === f

let g1 : G = G.a
let g2 : G.a = G.a
