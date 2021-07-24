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

class shap {
    constructor(color){
        this.color
    }
    draw(){
        console.log("Drawing...");
    }
}

class Rectangular extends shap{
    constructor (color, width, height){
     super(color)   
     this.width = width;
     this.height = height;
    }
    calculate(){
        return this.width * this.height;
    }
}
let r = new Rectangular(5, 7)
console.log(r);
r.draw();