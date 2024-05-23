const button = document.querySelector("button")!;

function log(data: string) {
    console.log("click" + data)
}

// log("hello")
button.addEventListener("click", log.bind(null, "hello"))



/**
 * CLASSES
 */

// abstract class Student {
//     name: string;
//     rollNo: number;
//     email: string;
//     private skills: string[] = [];

//     constructor(n: string, r: number, e: string) {
//         this.name = n;
//         this.rollNo = r;
//         this.email = e;
//     }
//     // addSkill(skill: string) {
//     //     this.skills.push(skill)
//     // }

//     // ABSTRACT
//     abstract addSkill1(skill: string): void;

//     getSkill() {
//         return this.skills;
//     }
// }

// const studentDetail = new Student("sheroz", 26, "murtuza@gmail.com");
// // studentDetail.addSkill("javascript");
// console.log(studentDetail.getSkill());
// console.log(studentDetail);

// /**
//  *  CLASSES SHORT HAND KEY
//  */
// class Student1 {
//     private skills: string[] = [];

//     constructor(public name: string, public rollNo: number, public email: string) { }
//     addSkill(skill: string) {
//         this.skills.push(skill)
//     }
//     getSkill() {
//         return this.skills;
//     }
// }

// const studentDetail1 = new Student1("sheikh", 20, "sheroz@gmail.com");
// studentDetail1.addSkill("Typescript");
// console.log(studentDetail1.getSkill());
// console.log(studentDetail1);


/**
 * INHERITANCE CLASSES KE ANDER EK CLASS KEY
 * USI CLASS KI BASE PE EK OR CLASS BANA LI JAYE
 * PURANE CLASS KI PROPERTY AJAYE
 * OR SATH ADDITINAL KUC OR KAM BHI KAR SKATE HN
 * EXTENDS CLASS KA CLONE BANATA HE
 * EXTANDS SE PHELE (CHILD) EXTANDS KE BAAD (PERENTS)
 * READONLY CHANGE NAI KAR SAKTE
 */

// class VolunteerStudent extends Student1 {
//     private canVolunteerIn: string[] = [];
//     // STATIC METHOD
//     static id: string = "abc-785";

//     constructor(name: string, readonly rollNo: number, email: string) {
//         super(name, rollNo, email);
//     };

//     addSkill() { }

//     addVolunteerSkill(skill: string) {
//         this.canVolunteerIn.push(skill);
//     }

//     // GETTER
//     get willVolunteerIn() {
//         return this.canVolunteerIn;
//     }

//     // SETTER
//     set willVolunteerIn(skills: string[]) {
//         for (const skill of skills) {
//             if (!skill) {
//                 return;
//             }
//         }
//         this.canVolunteerIn = skills;
//     }

// }
// const volunteerStudent = new VolunteerStudent("raza", 99, "raza@gmail.com");
// volunteerStudent.addSkill();
// volunteerStudent.addVolunteerSkill("attandace");
// console.log(volunteerStudent.getSkill);
// volunteerStudent.willVolunteerIn = ["apple"]; // GETTER
// console.log(volunteerStudent.willVolunteerIn); // SETTER
// console.log(VolunteerStudent.id); // STATIC METHOD


/**
 * SINGLE TENSE
 * SINGLE TENSE NO PART TYPESCRIPT JUST RULES PRGRAMMING LANGUGE
 * SINGLE TENSE EK PATTERN JISKE ANDER KISI BHI CLASS KO EK TARAH SE STRICT KARTE HN SIRF EK OBJECT BANE
 * EK HI BAR INITILIZE HO 
 */

class Human {
    // ISKA APNA OBJECT
    static object: Human;

    private constructor(private name: string) { }

    static getObject(name: string) {
        if (this.object) {
            return this.object;
        }
        this.object = new Human(name);
        return this.object;
    }
};
const sheroz = Human.getObject("sheroz");
const sheikh = Human.getObject("sheikh");
console.log(sheroz, sheikh);