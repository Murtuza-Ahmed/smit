"use strict";
// interface person {
//     name: string;
// };
class Human {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    speak(sentence) {
    }
}
let a;
a = 5;
a = "raza";
a = true;
/**
 * INTERSETION TYPE
 */
// type Bird = {
//     name: string;
//     flySpeed: number;
// }
// type animal = {
//     name: string;
//     runSpeed: number;
// }
// type Creature = Bird & animal;
// let b: Creature;
// b = {
//     name: "shahine",
//     flySpeed: 45,
//     runSpeed: 20
// }
/**
 * INTERFACE
 */
// interface Bird  {
//     name: string;
//     flySpeed: number;
// }
// interface Animal  {
//     name: string;
//     runSpeed: number;
// }
// interface Creature extends Bird, Animal { };
/**
 * TYPE GUIRED
 * type guired ek check hota he
 */
// type Bird = {
//     name: string;
//     flySpeed: number;
// }
// type Animal = {
//     name: string;
//     runSpeed: number;
// }
// type Creature = Bird | Animal;
// function log(Creature: Creature) {
//     console.log(Creature.name);
//     if ("runSpeed" in Creature) {
//         console.log(Creature.runSpeed)
//     }
// }
// log({ name: "dog", runSpeed: 80 });
class Bird {
    constructor(name, flySpeed) {
        this.name = name;
        this.flySpeed = flySpeed;
    }
}
class Animal {
    constructor(name, runSpeed) {
        this.name = name;
        this.runSpeed = runSpeed;
    }
}
function log(Creature) {
    console.log(Creature.name);
    if (Creature instanceof Animal) {
        console.log("RunSpeed" + Creature.runSpeed);
    }
    if (Creature instanceof Bird) {
        console.log("FlySpeed" + Creature.flySpeed);
    }
}
log(new Animal("dog", 50));
//# sourceMappingURL=app.js.map