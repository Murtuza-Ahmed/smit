/**
 * interface me (=) ka sing nai hota he
 * (TYPE) or (INTERFACE) dono ek hi he ek chota sa farq he
 * (type) classes par kam nai karti
 * (interface) classes par bhi kam karti hn
 * (point) jab ham ek class ko dusri class se implement karwate hn (extand) use karte hn
 * (point) jab class me interface implement karwate hn (implement) use karte hn
 * (point) interface banate waqt class me agar implement kara rahe hn to implement me jitni chiz he usko rakhna zarori he
 * ap class me alag se bhi property rakh sakte hn
 */
// INTERFACE    (START)
// let interfaceExm: Person;
// interfaceExm = {
//     name: "sheroz",
//     speak(sentance: string) {
//     },
// }
class Human {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    speak(sentance) {
    }
}
/**
 * END
 */
// ADVANCED TYPES   (START)
// type Combindes = string | number (|) Union type
let abc;
abc = 26;
abc = "sheroz";
console.log(abc);
console.log("ahmed");
let a;
a = {
    name: "shikra",
    flyingSpeed: 20,
    runningSpeed: 0,
};
console.log(a);
function animalLog(creature) {
    console.log(creature.name);
    if ("flyingSpeed" in creature) {
        console.log("FlyingSpeed " + creature.flyingSpeed);
    }
    if ("runningSpeed" in creature) {
        console.log("RunningSpeed " + creature.runningSpeed);
    }
}
animalLog({ name: "hourse", flyingSpeed: 0, runningSpeed: 27 });
// Type Guards Classes
class BirdFly {
    constructor(name, flyingSpeed) {
        this.name = name;
        this.flyingSpeed = flyingSpeed;
    }
}
class AnimalRun {
    constructor(name, runningSpeed) {
        this.name = name;
        this.runningSpeed = runningSpeed;
    }
}
//  type CreatureBA = BirdFly & AnimalRun;   //  eaxmple
// // Creating an object that has both flyingSpeed and runningSpeed
// const creature: CreatureBA = {
//     name: "gryphon",
//     flyingSpeed: 100,
//     runningSpeed: 50,
//     // Both constructors won't be used directly here, it's a composite object
// };
function animal(creature) {
    console.log(creature.name);
    if (creature instanceof BirdFly) {
        console.log("FlyingSpeed " + creature.flyingSpeed);
    }
    if (creature instanceof AnimalRun) {
        console.log("RunningSpeed " + creature.runningSpeed);
    }
}
animal(new AnimalRun("dog", 20));
animal(new BirdFly("shikra", 30));
// animal(creatura:any);
//# sourceMappingURL=app.js.map