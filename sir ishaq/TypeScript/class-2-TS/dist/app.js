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
// CLASSES (THERE ARE THREE TYPE OF KEY 1-(PUBLIC) 2-(PRIVATE) 3-(READONLY)
// STSART
class Student {
    // constructor(n: string, r: number) { // LONG CODE
    //     this.name = n;
    //     this.rollNo = r;
    // };
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        // name: string;
        // readonly rollNo: number;
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
// student1.rollNo = 30;
// student1.skills[2] = "TS";  // Problem empty Array (SKILLS IS PRIVATE PROPERTY NOT ACCESSEBL)
student1.getSkills(); // PRIVATE GET SKILLS GET
const student2 = new Student("Raza", 30);
student2.addSkill("html");
console.log(student1, student2);
// END
// CLASSES INHERITANCE  (START)
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
class volunteerStudent extends StudentSmit {
    constructor(name, rollNo) {
        super(name, rollNo); //  CONSTRUCTOR KA DATA PAS KARNE KAYLYE (SUPER) LAGATE HN
        this.canVolunteerIn = [];
    }
    addVolunterSkills(skills) {
        this.canVolunteerIn.push(skills);
    }
}
;
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
    constructor(n, r) {
        this.skills = []; //  Keep skills private to prevent direct modification, use getters and setters to access them.
        this.name = n;
        this.rollNo = r;
    }
    ;
    // constructor(public name: string, public rollNo: number) { } // Shorthand constructor form
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
class volunteerStudentMe extends StudentSit {
    constructor(name, rollNo) {
        super(name, rollNo); //  Pass data to the parent class constructor using super
        this.canVolunteerInMe = []; // Keep canVolunteerInMe private to prevent direct modification, use getter to access it
    }
    addVolunterSkills(skills) {
        this.canVolunteerInMe.push(skills);
    }
    get willVolunteerIn() {
        return this.canVolunteerInMe;
    }
    set willVolunteerIn(skills) {
        for (const skill of skills) { //  CONDITION LAGA KE ARRAY SKILLS CHECK KAR RAHE HN AGARA SKILLS EMPTY HO TO RETURN KARDE 
            if (!skill) {
                return;
            }
        }
        this.canVolunteerInMe = skills; //  APNE MARZI SE SET KARA SAKTE HN
    }
}
;
// Create an instance of StudentSit
const studentMe = new StudentSit("Sheroz", 27);
studentMe.addSkill("javascript");
console.log(studentMe);
// Create an instance of VolunteerStudentMe
const volunteerMe = new volunteerStudentMe("Raza", 20);
volunteerMe.addSkill("html");
volunteerMe.addSkill("teaching");
volunteerMe.willVolunteerIn = ["apple"];
console.log(volunteerMe.getSkills());
console.log(volunteerMe.willVolunteerIn); //  GETTER KA FYDA YE HOTA HE CALL KARNE KI ZORORAT NAHI HOTI LAGTA METHOD KI TARAH HE PAR BEHAVE PROPERTY KI TARAH KARE GA
// (END)
// STATIC METHOD  START  (Static Method ka Fayda ye he WhitOut (OBJECT) banaye Access kae sakte hn)
class StudentMath {
    constructor(n, r) {
        this.skills = []; //  Keep skills private to prevent direct modification, use getters and setters to access them.
        this.name = n;
        this.rollNo = r;
    }
    ;
    // constructor(public name: string, public rollNo: number) { } // Shorthand constructor form
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
class volunteerStudentMath extends StudentMath {
    constructor(name, rollNo) {
        super(name, rollNo); //  Pass data to the parent class constructor using super
        this.canVolunteerInMath = []; // Keep canVolunteerInMe private to prevent direct modification, use getter to access it
    }
    addVolunterSkills(skills) {
        this.canVolunteerInMath.push(skills);
    }
    get willVolunteerIn() {
        return this.canVolunteerInMath;
    }
    set willVolunteerIn(skills) {
        for (const skill of skills) { //  CONDITION LAGA KE ARRAY SKILLS CHECK KAR RAHE HN AGARA SKILLS EMPTY HO TO RETURN KARDE 
            if (!skill) {
                return;
            }
        }
        this.canVolunteerInMath = skills; //  APNE MARZI SE SET KARA SAKTE HN
    }
}
volunteerStudentMath.id = "abc-123"; //  STATIC METHOD
;
// Create an instance of StudentSit
const studentMath = new StudentMath("Sheroz", 27);
studentMe.addSkill("javascript");
// studentMath.id   //  STATIC PROPERTYES YA STATIC METHOD JO HOTE HN WO HAMARE BANAYE HUWE OBJECTME NAHI MILENGE (JIS CLASS ME STATIC HE US CLASS KO ACCESS KARNA PARE GA)
console.log(studentMe);
// Create an instance of VolunteerStudentMe
const volunteerMath = new volunteerStudentMath("Raza", 20);
volunteerMe.addSkill("html");
volunteerMe.addSkill("teaching");
volunteerMe.willVolunteerIn = ["apple"];
console.log(volunteerStudentMath.id);
console.log(volunteerMe.getSkills());
console.log(volunteerMe.willVolunteerIn); //  GETTER KA FYDA YE HOTA HE CALL KARNE KI ZORORAT NAHI HOTI LAGTA METHOD KI TARAH HE PAR BEHAVE PROPERTY KI TARAH KARE GA
// (END)
/**
 * Abstract Classes esi Classes Hoti Hn Jinki Method ki koi Defination Nai hoti
 * koi bhi is class ko extands karta he usko ye wala (METHOD) define karna pare ga
 * Ek rule define karte hn agar apko ye kam karna he to apko is rule se chalna pare ga
 * method ko Abstract karne ke bad pori class ko abstract karna pare ga
 */
// ABSTRACT AND SINGLETONS
class StudentAbstract {
    constructor(n, r) {
        this.skills = []; //  Keep skills private to prevent direct modification, use getters and setters to access them.
        this.name = n;
        this.rollNo = r;
    }
    ;
    getSkills() {
        return this.skills;
    }
    ;
}
;
class volunteerStudentAbstract extends StudentAbstract {
    constructor(name, rollNo) {
        super(name, rollNo); //  Pass data to the parent class constructor using super
        this.canVolunteerInMath = []; // Keep canVolunteerInMe private to prevent direct modification, use getter to access it
    }
    addSkill(skill) { } //  rule define method abstract
    addVolunterSkills(skills) {
        this.canVolunteerInMath.push(skills);
    }
    get willVolunteerIn() {
        return this.canVolunteerInMath;
    }
    set willVolunteerIn(skills) {
        for (const skill of skills) { //  CONDITION LAGA KE ARRAY SKILLS CHECK KAR RAHE HN AGARA SKILLS EMPTY HO TO RETURN KARDE 
            if (!skill) {
                return;
            }
        }
        this.canVolunteerInMath = skills; //  APNE MARZI SE SET KARA SAKTE HN
    }
}
volunteerStudentAbstract.id = "abc-123"; //  STATIC METHOD
;
// Create an instance of VolunteerStudentMe
const volunteerAbctract = new volunteerStudentAbstract("Raza", 20);
volunteerMe.addSkill("html");
volunteerMe.addSkill("teaching");
volunteerMe.willVolunteerIn = ["apple"];
console.log(volunteerStudentMath.id);
console.log(volunteerMe.getSkills());
console.log(volunteerMe.willVolunteerIn); //  GETTER KA FYDA YE HOTA HE CALL KARNE KI ZORORAT NAHI HOTI LAGTA METHOD KI TARAH HE PAR BEHAVE PROPERTY KI TARAH KARE GA
// (END)
//# sourceMappingURL=app.js.map