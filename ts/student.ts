type student = {id:number,name:string,age:number,lifestatus:boolean};
let mstudent:student={id:1,name:"Riko",age:23,lifestatus:true};

console.log(mstudent);

const students:student[]=[
    mstudent,
    {id:2,name:"Kiecko",age:25,lifestatus:false},
    {id:3,name:"Lee",age:14,lifestatus:true},
]

students.push({id:4,name:"Lara",age:1009,lifestatus:false})
console.log(students)

const backup:student={id:students[2].id,name:students[2].name,lifestatus:students[2].lifestatus,age:students[2].age}
const rename: (id:number,name:string) => student = (id, name) => {
    const toUpdate:student = students.find(a=>a.id===id)
    toUpdate.name=name
    return toUpdate
}
console.log(backup)
console.log(rename(3,"NewLee"))
console.log("with == ", backup==students[3])
console.log("with === ", backup===students[3])
console.log(students)
console.log("============================================")

/*
=> bei Objekten könen die Ticks der Keys wegfallen, in einem JSON nicht
    => let f: {} = {"name": "Rick", "age": 5};
ODER
    => let f: {"name": string, "age": number} = {"name": "Rick", "age": 5};

=> let f: {"name": string, "age": number}[] = [
    {"name": "Rick", "age": 5},  {"name": "Morty", "age": 7}
];

EIGENEN TYP erstellen
=> type greeting = 'hallo' | 'hello';
=> type greeting () = void;

*/
const backup2:student={id:students[2].id,name:students[2].name,lifestatus:students[2].lifestatus,age:students[2].age}
const rename2: (id:number,name:string) => student = (id, name) => {

    let toUpdate:student = students.find((a)=>(a.id===id))
    let i=students.findIndex(a=>a===toUpdate)//2
    const forReplace:student = {id:id,name:name,lifestatus:toUpdate.lifestatus,age:toUpdate.age}
    students[i]=forReplace
    return forReplace
}
console.log(backup2)
console.log(rename2(3,"NewNewLee"))
console.log("with == ", backup2==students[3])
console.log("with === ", backup2===students[3])
console.log(students)

