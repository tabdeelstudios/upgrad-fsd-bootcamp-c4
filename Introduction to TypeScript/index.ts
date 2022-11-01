let score: number[] = [20, 45, 65, 199, 22]
let person: [string, number, boolean] = ["John", 40, true]

enum Access { Admin, TeamLead, Employee }
let newEmployee: number = Access.TeamLead
console.log(newEmployee)