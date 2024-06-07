/**
 * Type Casting
 * (1:Approch)  ! as HTMLInputElement
 * (2:Approch)  <HTMLInputElement> best paractice
 */

// const elem = <HTMLInputElement>document.getElementById("input")!;

// elem.value


/**
 * GENERICS
 * basic generics ko type batate hn TS me. or khud hi NAME bata dete hn us type ka
 * meri ye type he or is type ka name ye hoga example
 * (POINT GENERICS Defination)  kisi bhi type ki additional information ham generics me pass kar rahe hote hn
 * <> TypeScript me isse generics khete hn
 */

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 2000)
});

promise.then(data => data.split(" ")).catch(Error => console.log(Error))

// MEARGE FUNCTION

function merage<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB }
};

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

function Logger(_: Function) {    //  agar parameter ki need nai hoto underscore (_) kar den

    console.log("logging...");
};


@Logger
class Person {
    name = "sheroz";

    constructor() {
        console.log("called");
    }
}

const myName = new Person();