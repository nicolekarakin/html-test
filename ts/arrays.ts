let names: string[] = ['Claudia','Barbara','Nicole']
console.log(names)
let first = names[0]
console.log(first)

names.filter((value) => {
    return value.length > 6
}).map((value) => {
    return 'Teilnehmer*in ' + value
}).forEach((value) => {
    console.log("Hallo " + value)
})

if (names.find((value) => {
    return value.length > 6
})) {

}

console.log("Hallo " + 'Claudia')
console.log("Hallo " + 'Barbara')
console.log("Hallo " + 'Nicole')