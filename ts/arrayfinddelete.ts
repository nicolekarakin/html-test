type Animal = {
    name: string,
    size: 'large' | 'medium' | 'small'
}
const animals: Animal[] = [
    {
        name: 'Affe',
        size: 'medium'
    },
    {
        name: 'Bär',
        size: 'large'
    },
    {
        name: 'Biene',
        size: 'small'
    },
]

const index = animals.findIndex(animal => animal.name === 'Bär')
animals.splice(index, 1)

console.log(animals)

const namesX = ["eins", "zwei", "drei", "vier"]
const allNamesX = ["null", ...namesX , "vier"]

const [x1,x2,x3]: string[] = ["eins", "zwei", "drei", "vier"]

const myObj: {art: string, holz: string} = {
    holz: "hartholz",
    art: "Buche",
}

// const art = myObj.art
// const holz = myObj.holz

const {art, holz}: {art: string, holz: string} = {
    holz: "hartholz",
    art: "Buche",
}

console.log(art)