class Parent {
    constructor(){
        this.fatherName = "Late. Ajit"
    }
}

class Child extends Parent{
    constructor(name){
        super() //mandotary
        this.name = name;
    }
    // getFullName(){                    // can use Function without write function
    //     return this.name + " " + this.fatherName
    // }
}

const fristSon = new Child("Chanchol");
const secondSon = new Child("Ujjal");
console.log(fristSon);
console.log(secondSon);
// console.log(fristSon.getFullName());
// console.log(secondSon.getFullName());