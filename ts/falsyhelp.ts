let bla: string | undefined = undefined

let x: any = {
    "name": "Daniel",
    "age": 0,
}

let y = 0;
console.log("!!y",!!y)
if (y) {
    console.log("true")
} else {
    console.log("false")
}
//==========================
let z = new Array();//[];
console.log("!!z",!!z)
if (z) {
    console.log("true")
} else {
    console.log("false")
}

z.push(1);
console.log("!!z",!!z)
if (z) {
    console.log("true")
} else {
    console.log("false")
}