"use strict";
/**
 * Type Casting
 * (1:Approch)  ! as HTMLInputElement
 * (2:Approch)  <HTMLInputElement> best paractice
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const elem = <HTMLInputElement>document.getElementById("input")!;
// elem.value
/**
 * GENERICS
 * basic generics ko type batate hn TS me. or khud hi NAME bata dete hn us type ka
 * meri ye type he or is type ka name ye hoga example
 * (POINT GENERICS Defination)  kisi bhi type ki additional information ham generics me pass kar rahe hote hn
 * <> TypeScript me isse generics khete hn
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 2000);
});
promise.then(data => data.split(" ")).catch(Error => console.log(Error));
// MEARGE FUNCTION
function merage(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
;
const meargeData = merage({ name: "sheroz" }, { age: 27 });
meargeData.name;
console.log(meargeData);
/**
 * DECORATORS
 * decorators simple ek function he
 * (point) decorators hamesha class ke sath use hoga class ke ilawa use nai hoga
 * (point) decorators function banate waqt first letter capital hoga
 * (point) class ke sath decorators use karne kylye (@) use karna pare ga
 * (@) ka matlab typescript me Decorators he
 * (point) decorators ke function ke parameter me constructor ka istemal karen ge
 */
function Logger(data) {
    return function (_) {
        console.log("logging... " + data);
    };
}
;
let Person = class Person {
    constructor() {
        this.name = "sheroz";
        console.log("called");
    }
};
Person = __decorate([
    Logger("data")
], Person);
const myName = new Person();
// DECORATORS CONNECT HTML TAG P
function LogPerson(data) {
    return function (_) {
        console.log("logging... " + data);
    };
}
function FillHTML(template, id) {
    return function (_) {
        const elem = document.getElementById(id);
        if (elem) {
            elem.innerHTML = template;
        }
    };
}
let NewPerson = class NewPerson {
    constructor() {
        this.name = "ahmed";
        console.log("called");
    }
};
NewPerson = __decorate([
    LogPerson("data"),
    FillHTML("<b>This My data</b>", "app")
], NewPerson);
const newName = new NewPerson();
function add(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw Error("Type Check Kar");
    }
}
console.log(add(1, 2));
console.log(add("abc", "def"));
// console.log(add(1, "a"));
add("abc", "abc").split(" ");
add(1, 3).toFixed();
function add1(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "number") {
        throw Error("Type Check Kar");
    }
    else if (typeof a === "number" && typeof b === "string") {
        throw Error("Type Sahi se Check Kar");
    }
}
console.log(add1(1, 2));
console.log(add1("abc", "def"));
console.log(add1(1, "a"));
console.log(add1("a", 2));
add1("abc", "abc").split(" ");
add1(1, 4).toFixed();
//# sourceMappingURL=app.js.map