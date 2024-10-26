const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.querySelector("button")!;

function add(num1: number, num2: number) {
    return num1 + num2
};

button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
});


/* 
1| NUMBER 5
2| Decimal Number 5.5
3| (-) ME KOI VALUE AI ISKI TYPE BHI NUMBER HOGI
4| STRING
5| BOOLEAN TRUE/FALSE
*/


let person = "Sheroz";
person = "Sheikh";

let num: number;
num = 5

let personName: string;
personName = "Sheikh";

let bool: boolean;
bool = false;
bool = true;

// ARRAY KI TYPE TYPE OF ARRAY

// const nameArr = ["sheroz", "raza", "ahmed", "sheikh", "murtuza"];

let nameArr: string[] = [];
nameArr.push("sheroz");

let numberArr: number[] = [];
numberArr.push(5);


// OBJECT KI TYPE TYPE OF OBJECT

const personObj: {
    name: string;
    age: number;
    hobbies: string[];
    email?: string;  //  BAD PARACTICE
} = {
    name: "sheroz",
    age: 25,
    hobbies: ["football", "basketball"],
    // email: "" BEST PARACTICE
}
personObj.email = "murtuza.programmer@gmail.com";

// CUSTOME TYPE

type FreindDetail = { // CUSTOME TYPE
    name: string;
    age: number;
    hobbies: string[];
    email: string;
}

let freindDetail: FreindDetail = {
    name: "umer",
    age: 24,
    email: "umerabbas@gmail.com",
    hobbies: ["larkiBazi", "AuntiLover"]
}

type customerDetail = { // CUSTOME TYPE
    name: string;
    age: number;
    hobbies: string[];
    email: string;
}

let customer: customerDetail[] = []
customer.push({
    name: "sheroz",
    age: 27,
    email: "umerabbas@gmail.com",
    hobbies: ["larkiBazi", "AuntiLover"]
})
console.log(customer)



// [TUPLE] ARRAY TYPESCRIPT

const statuses: [number, string, boolean] = [404, "not found", false];   // FIXED LENGTH

type role = [number, string, boolean];
const roles: role = [0, "admin", true];    //FIXED LENGTH


let data: string | number | boolean;
data = "Ahemd";
data = 27;
data = true


// Template Literal Types
// literal Type ham khud batate hn hame konsi string chaye
function myFunc(num1: number, num2: number, count: "add" | "sub") {
    count === "add" ? num1 + num2 : "NaN";
    count === "sub" ? num1 - num2 : "Nan";
}

console.log("ADDITION", myFunc(5, 10, "add"));
console.log("SUBTRACT", myFunc(5, 20, "sub"));
// console.log("DIVIDED", myFunc(2, 4, "divi"));


// FUNCTION

let myFuncAdd: (a: number, b: number) => number;

function multipule(num1: number, num2: number): number {
    return num1 * num2
}

myFuncAdd = multipule;
let result = myFuncAdd(5, 20);
console.log("RESULT", result);