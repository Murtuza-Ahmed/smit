"use strict";
/**
 * TYPE CASTING
 */
// const elem = <HTMLInputElement>document.getElementById("input")!;
// elem.value;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * GENERIC
 * TYPE GENERIC <>
 * ADDITIONAL INFORMATION OR ISSE PASS GENERIC KE THROU KARTE HN
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 2000);
});
promise.then(data => {
    data.split("");
});
/**
 * HELPER FUNCTION
 * GENERICE <>
 */
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged = merge({ name: "sheroz" }, { age: 26 });
console.log(merged.name);
/**
 * DECORATORS
 * DECORATORS SIMPLE EK FUNCTION HE OR YE CLASS KE SATH USE HOGA
 * CLASS KE SATH DECORATORS USE KARNE KYLYE EK SPECIFIC SIGN HOTA HE (@)
 * (@) USKE BAD DECORATORS KA NAME
 */
function Logger(data) {
    return function (_) {
        console.log("loggin...." + data);
    };
}
function FillHTML(template, id) {
    return function (_) {
        const ele = document.getElementById(id);
        if (ele) {
            ele.innerHTML = template;
        }
    };
}
let Persone = class Persone {
    constructor() {
        this.name = "sheikh";
        console.log("called");
    }
};
Persone = __decorate([
    Logger("data"),
    FillHTML("<b>this is my data</b>", "app")
], Persone);
const sheroz = new Persone();
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw Error("Type check kar");
    }
}
add(1, 2).toFixed();
add("abc", "bca").split("");
//# sourceMappingURL=app.js.map