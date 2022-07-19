type Student = {
    name: string,
    id: number,
}

const findAndUpdateName = (students: Student[], idToSearch: number, newName: string) => {
    let foundStudent: Student | undefined = students.find(s => s.id === idToSearch);
    if (foundStudent) {
        foundStudent.name = newName
    }
}

const findAndUpdateName2 = (students: Student[], idToSearch: number, newName: string) => {
    students.forEach((s,i) => {
        if (s.id === idToSearch) {
            students[i] = {
                name: newName,
                id: s.id,
            }
        }
    })
}


const firstStudent: Student = {
    name: "Daniel",
    id: 1,
}

const javaStudents: Student[] = [firstStudent]

console.log(firstStudent, javaStudents)
findAndUpdateName(javaStudents, 1, "Danielo")
console.log(firstStudent, javaStudents)

// ---------------------


const blaStudent: Student = {
    name: "Daniel",
    id: 1,
}

const blubbStudents: Student[] = [blaStudent]

console.log(blaStudent, blubbStudents)
findAndUpdateName2(blubbStudents, 1, "Danielo")
console.log(blaStudent, blubbStudents)

