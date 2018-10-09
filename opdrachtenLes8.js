//opdracht 1
const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        salary: 10000,
        hoursPerWeek: 12
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        salary: 10000,
        hoursPerWeek: 12
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        salary: 10000,
        hoursPerWeek: 12
    }
]


function teacherLog() {
    for (let i = 0; i < teachers.length; i++) {
        console.log("i have a ", teachers[i].profession, "named ", teachers[i].name, "and he uses a ", teachers[i].brand, "computer. His salary per month is: ", (teachers[i].salary / (teachers[i].hoursPerWeek * 4)));
    }
}
teacherLog();

//opdracht 2
//ingevoegd.