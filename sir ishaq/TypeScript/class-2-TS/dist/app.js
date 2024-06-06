"use strict";
const button = document.querySelector("button"); //    ! Confirm Karta He
// button.addEventListener("click", () => {
//     console.log("clicked");
// });
function log(data) {
    console.log("clicked", data);
}
log("Hello");
function login(data) {
    console.log("DATA", data);
}
button.addEventListener("click", login.bind(this, "Raza")); // .bind FIRST null | this AND Argument
// CLASSES
class Student {
    // constructor(n: string, r: number) { // LONG CODE
    //     this.name = n;
    //     this.rollNo = r;
    // };
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        // name: string;
        // rollNo: number;
        this.skills = []; // MERE ARRAY ME KOI PROBLEM CREATE NA HO IS LYE ISE (PRIVATE) RAKHTE HN BUT PHIR ISSE ACCESS NAHI KAR SAKTE IS KYLYE (GETTER OR SUTTER) KA IS TEMAL KARTE HN YA PHIR FUNCTION KA ISTEMAL KARTE HN
    } // SHORT HAND CODE
    addSkill(skill) {
        this.skills.push(skill);
    }
    ;
    getSkills() {
        return this.skills;
    }
    ;
}
;
const student1 = new Student("Sheroz", 27);
student1.addSkill("javascript");
// student1.skills[2] = "TS";  // Problem empty Array (SKILLS IS PRIVATE PROPERTY NOT ACCESSEBL)
student1.getSkills(); // PRIVATE GET SKILLS GET
const student2 = new Student("Raza", 30);
student2.addSkill("html");
console.log(student1, student2);
// CLASSES INHERITANCE
class StudentSmit {
    constructor(n, r) {
        this.skills = []; // MERE ARRAY ME KOI PROBLEM CREATE NA HO IS LYE ISE (PRIVATE) RAKHTE HN BUT PHIR ISSE ACCESS NAHI KAR SAKTE IS KYLYE (GETTER OR SUTTER) KA IS TEMAL KARTE HN YA PHIR FUNCTION KA ISTEMAL KARTE HN
        this.name = n;
        this.rollNo = r;
    }
    ;
    // constructor(public name: string, public rollNo: number) { } // SHORT HAND CODE
    addSkill(skill) {
        this.skills.push(skill);
    }
    ;
    getSkills() {
        return this.skills;
    }
    ;
}
;
const studentSit = new StudentSmit("Sheroz", 27);
studentSit.addSkill("javascript");
// student1.skills[2] = "TS";  // Problem empty Array (SKILLS IS PRIVATE PROPERTY NOT ACCESSEBL)
studentSit.getSkills(); // PRIVATE GET SKILLS GET
const studentSt = new StudentSmit("Raza", 30);
student2.addSkill("html");
console.log(studentSit, studentSt);
//# sourceMappingURL=app.js.map