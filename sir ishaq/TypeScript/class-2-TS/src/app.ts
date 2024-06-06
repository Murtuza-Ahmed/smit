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


// CLASSES (THERE ARE THREE TYPE OF KEY 1-(PUBLIC) 2-(PRIVATE) 3-(READONLY)
// STSART
class Student {
    // name: string;
    // readonly rollNo: number;
    private skills: string[] = [];  // MERE ARRAY ME KOI PROBLEM CREATE NA HO IS LYE ISE (PRIVATE) RAKHTE HN BUT PHIR ISSE ACCESS NAHI KAR SAKTE IS KYLYE (GETTER OR SUTTER) KA IS TEMAL KARTE HN YA PHIR FUNCTION KA ISTEMAL KARTE HN

    // constructor(n: string, r: number) { // LONG CODE
    //     this.name = n;
    //     this.rollNo = r;
    // };
    constructor(public name: string, public readonly rollNo: number) { } // SHORT HAND CODE

    addSkill(skill: string) {
        this.skills.push(skill);
    };
    getSkills() {   // IS FUNCTION KI HELP SE PRIVATE SKILLS KO GET KAR SAKTE HN
        return this.skills;
    };
};

const student1 = new Student("Sheroz", 27);
student1.addSkill("javascript");
// student1.rollNo = 30;
// student1.skills[2] = "TS";  // Problem empty Array (SKILLS IS PRIVATE PROPERTY NOT ACCESSEBL)
student1.getSkills();   // PRIVATE GET SKILLS GET
const student2 = new Student("Raza", 30);
student2.addSkill("html");
console.log(student1, student2);
// END




// CLASSES INHERITANCE  (START)

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

class volunteerStudent extends StudentSmit {    //  EXTENDS SE PHELE (CHILD) EXTANDS KE BAD (PARINT) 
    canVolunteerIn: string[] = [];

    constructor(name: string, rollNo: number) {
        super(name, rollNo) //  CONSTRUCTOR KA DATA PAS KARNE KAYLYE (SUPER) LAGATE HN
    }
    addVolunterSkills(skills: string) {
        this.canVolunteerIn.push(skills)
    }
};

const studentSmit = new volunteerStudent("Sheroz", 27);
studentSmit.addSkill("javascript");
studentSmit.addVolunterSkills("managment");
// student1.skills[2] = "TS";  // Problem empty Array (SKILLS IS PRIVATE PROPERTY NOT ACCESSEBL)
// studentSit.getSkills();   // PRIVATE GET SKILLS GET
// const studentSt = new volunteerStudent("Raza", 30);
// student2.addSkill("html");
console.log(studentSmit);
// (END)




// GETTER AND SUTTER    (START)

class StudentSit {
    name: string;
    rollNo: number;
    private skills: string[] = [];  //  Keep skills private to prevent direct modification, use getters and setters to access them.
    constructor(n: string, r: number) { // Long constructor form
        this.name = n;
        this.rollNo = r;
    };
    // constructor(public name: string, public rollNo: number) { } // Shorthand constructor form

    addSkill(skill: string) {
        this.skills.push(skill);
    };
    getSkills() {   // Use this method to get the private skills array
        return this.skills;
    };
};

class volunteerStudentMe extends StudentSit {    //  Extends child class VolunteerStudentMe from parent class StudentSit 

    private canVolunteerInMe: string[] = [];  // Keep canVolunteerInMe private to prevent direct modification, use getter to access it

    constructor(name: string, rollNo: number) {
        super(name, rollNo); //  Pass data to the parent class constructor using super
    }
    addVolunterSkills(skills: string) {
        this.canVolunteerInMe.push(skills);
    }

    get willVolunteerIn() { //   Getter method to access canVolunteerInMe
        return this.canVolunteerInMe;
    }

    set willVolunteerIn(skills: string[]) { //  SETTER METHOD TO ACCESS canVolunteerInMe

        for (const skill of skills) {   //  CONDITION LAGA KE ARRAY SKILLS CHECK KAR RAHE HN AGARA SKILLS EMPTY HO TO RETURN KARDE 
            if (!skill) {
                return
            }
        }

        this.canVolunteerInMe = skills;     //  APNE MARZI SE SET KARA SAKTE HN
    }
};

// Create an instance of StudentSit
const studentMe = new StudentSit("Sheroz", 27);
studentMe.addSkill("javascript");
console.log(studentMe);

// Create an instance of VolunteerStudentMe
const volunteerMe = new volunteerStudentMe("Raza", 20);
volunteerMe.addSkill("html");
volunteerMe.addSkill("teaching");
volunteerMe.willVolunteerIn = ["apple"]
console.log(volunteerMe.getSkills());
console.log(volunteerMe.willVolunteerIn);   //  GETTER KA FYDA YE HOTA HE CALL KARNE KI ZORORAT NAHI HOTI LAGTA METHOD KI TARAH HE PAR BEHAVE PROPERTY KI TARAH KARE GA
// (END)