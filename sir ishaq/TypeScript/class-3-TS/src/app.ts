import { Person, Combined } from "./types";

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

class Human implements Person {
    constructor(public name: string, private id: string) { }
    speak(sentance: string): void {

    }
}


/**
 * END
 */


// ADVANCED TYPES

// type Combindes = string | number

let abc: Combined;
abc = 26;
abc = "sheroz";
console.log(abc)

console.log("ahmed")