class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "R.B.K. School"; // default
    }
}

const student1 = new Student(12, "Rai");
const student2 = new Student(13, "Shammo");

console.log(student1, student2);