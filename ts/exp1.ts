const add1=function(a:number,b:number){
    return a+b;
}
const minus1=(a:number,b:number)=>{
    return a-b;
}

console.log(add1(5,7));
console.log(minus1(5,7));

//npm install -g ts-node typescript '@types/node'
//ts-node typescript-file.ts
// or npx ts-node src/foo.ts



let a: number = 7;
let b: string = 'hallo';
let c: () => void = () => {}
let d: (x:number) => void = (x) => {
    console.log(x)
}
let e: string[] = ['a','b','c']
let f: {name: string, age: number} = {age: 5, name: "Rick"}
let g: number | string = 'hallo'
let h: 'hallo' | 'hello' = 'hallo'
type greeting = 'hallo' | 'hello'
let i: greeting = 'hallo'
let j: greeting = 'hello'

//======================================
const add:(a:number, b:number) =>number = (a,b) => {
    return a+b;
}
console.log(add(3,7))

const multiply = (a:number, b:number) => {
    return a*b;
}
console.log(multiply(3,7))