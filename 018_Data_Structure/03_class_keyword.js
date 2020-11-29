class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.scores = []
    }

    fuck = () => {
        console.log(`fuck ${this.firstName}`)
    }

    addScore = (score) => {
        this.scores.push(score)
        return this.scores
    }

    static enrollStudents = (...students) => {
        console.log(...students)
    }
}

let firstStudent = new Student("Colt", "Steele", 3)



//Class methods
//static keyword
//often used to create utility functions for an application

// static enrollStudents(...students) {
    //do something
// }


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)


//Math.hypot 
//returns the square root of the sum of two input numbers squared
//to find the hypotenuse 
//e.g.
let xDistance = 5
let yDistance = 8
//Math.hypot(xDistance, yDistance)
// 5^2 + 8^2 = 25 + 64  = 89
// √89

class DataStructure() {
    constructor() {
        // properties class should have
    }

    someInstanceMethod() {
        //what should each object create from this class be able to do?
        //called by instanceName.someInstanceMethod()
    }

    static classMethod() {
        //almost never used
    }
}