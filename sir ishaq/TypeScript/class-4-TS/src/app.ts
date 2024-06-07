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
 * (point) decorators ke function ke parameter me constructor ka istemal karen ge
 */

function Logger(data: string) {    //  agar parameter ki need nai hoto underscore (_) kar den
    return function (_: Function) {
        console.log("logging... " + data);
    }
};
@Logger("data")
class Person {
    name = "sheroz";

    constructor() {
        console.log("called");
    }
}

const myName = new Person();


// DECORATORS CONNECT HTML TAG P


function LogPerson(data: string) {
    return function (_: Function) {
        console.log("logging... " + data)
    }
}

function FillHTML(template: string, id: string) {
    return function (_: Function) {
        const elem = document.getElementById(id);
        if (elem) {
            elem.innerHTML = template;
        }
    }
}
@LogPerson("data")
@FillHTML("<b>This My data</b>", "app")
class NewPerson {
    name = "ahmed";

    constructor() {
        console.log("called");
    }
}

const newName = new NewPerson()


/**
 * OVERLOAD FUNCTION
 * 
 */
// OVERLOAD FUNCTION    (FIRST APPROCH)

type Combined = string | number;    //  FIRST Approch

function add(a: Combined, b: Combined) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b
    } else {
        throw Error("Type Check Kar")
    }
}

console.log(add(1, 2));
console.log(add("abc", "def"));
// console.log(add(1, "a"));
(add("abc", "abc") as string).split(" ");
(add(1, 3) as number).toFixed();


// OVERLOAD FUNCTION    (SECOND APPROCH)

type Combined1 = string | number;    //  SECOND Approch

function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: number, b: string): number | string;
function add1(a: string, b: number): string | number;
function add1(a: Combined, b: Combined) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b
    } else if (typeof a === "string" && typeof b === "number") {
        throw Error("Type Check Kar")
    } else if (typeof a === "number" && typeof b === "string") {
        throw Error("Type Sahi se Check Kar");
    }
}

console.log(add1(1, 2));
console.log(add1("abc", "def"));
console.log(add1(1, "a"));
console.log(add1("a", 2));
add1("abc", "abc").split(" ");
add1(1, 4).toFixed();