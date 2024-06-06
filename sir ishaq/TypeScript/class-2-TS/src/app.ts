const button = document.querySelector("button")!; //    ! Confirm Karta He

// button.addEventListener("click", () => {
//     console.log("clicked");
// });

function log(data: any) {
    console.log("clicked", data)
}
log("Hello");

function login(data: string) {
    console.log("DATA", data)
}
button.addEventListener("click", login.bind(this, "Raza")); // .bind FIRST null | this AND Argument


// CLASSES

class Student {
    // name: string;
    // rollNo: number;
    private skills: string[] = [];  // MERE ARRAY ME KOI PROBLEM CREATE NA HO IS LYE ISE (PRIVATE) RAKHTE HN BUT PHIR ISSE ACCESS NAHI KAR SAKTE IS KYLYE (GETTER OR SUTTER) KA IS TEMAL KARTE HN YA PHIR FUNCTION KA ISTEMAL KARTE HN

    // constructor(n: string, r: number) { // LONG CODE
    //     this.name = n;
    //     this.rollNo = r;
    // };
    constructor(public name: string, public rollNo: number) { } // SHORT HAND CODE

    addSkill(skill: string) {
        this.skills.push(skill);
    };
    getSkills() {   // IS FUNCTION KI HELP SE PRIVATE SKILLS KO GET KAR SAKTE HN
        return this.skills;
    };
};

const student1 = new Student("Sheroz", 27);
student1.addSkill("javascript");
// student1.skills[2] = "TS";  // Problem empty Array (SKILLS IS PRIVATE PROPERTY NOT ACCESSEBL)
student1.getSkills();   // PRIVATE GET SKILLS GET
const student2 = new Student("Raza", 30);
student2.addSkill("html");
console.log(student1, student2);




// CLASSES INHERITANCE

class StudentSmit {
    name: string;
    rollNo: number;
    private skills: string[] = [];  // MERE ARRAY ME KOI PROBLEM CREATE NA HO IS LYE ISE (PRIVATE) RAKHTE HN BUT PHIR ISSE ACCESS NAHI KAR SAKTE IS KYLYE (GETTER OR SUTTER) KA IS TEMAL KARTE HN YA PHIR FUNCTION KA ISTEMAL KARTE HN

    constructor(n: string, r: number) { // LONG CODE
        this.name = n;
        this.rollNo = r;
    };
    // constructor(public name: string, public rollNo: number) { } // SHORT HAND CODE

    addSkill(skill: string) {
        this.skills.push(skill);
    };
    getSkills() {   // IS FUNCTION KI HELP SE PRIVATE SKILLS KO GET KAR SAKTE HN
        return this.skills;
    };
};



const studentSit = new StudentSmit("Sheroz", 27);
studentSit.addSkill("javascript");
// student1.skills[2] = "TS";  // Problem empty Array (SKILLS IS PRIVATE PROPERTY NOT ACCESSEBL)
studentSit.getSkills();   // PRIVATE GET SKILLS GET
const studentSt = new StudentSmit("Raza", 30);
student2.addSkill("html");
console.log(studentSit, studentSt);