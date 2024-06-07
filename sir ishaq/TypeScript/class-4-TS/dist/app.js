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
 */
function Logger(_) {
    console.log("logging...");
}
;
let Person = class Person {
    constructor() {
        this.name = "sheroz";
        console.log("called");
    }
};
Person = __decorate([
    Logger
], Person);
const myName = new Person();
//# sourceMappingURL=app.js.map