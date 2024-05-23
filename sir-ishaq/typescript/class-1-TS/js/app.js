// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;
// function add(number1: number, number2: number) {
//     return number1 + number2
// }
// button.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value))
// })
/**
 * number 5, 5.5, -7
 * string "Apple"
 * boolen true / false
 */
// let person: string;
// person = "Sheikh";
// let names: string[] = [];
// names.push("Sheroz");
// let number: number[] = [];
// number.push(5);
// type personal = {
//     name: string;
//     age: number;
//     hobbies: string[];
//     email: string;
// };
// const personal: personal = {
//     name: "Sheroz",
//     age: 26,
//     hobbies: ["football", "travlling", "programming"],
//     email: ""
// }
// personal.email = "programmer@gmail.com";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     email: string;
// } = {
//     name: "Sheroz",
//     age: 26,
//     hobbies: ["football", "travlling", "programming"],
//     email: ""
// }
// person.email = "programmer@gmail.com";
/**
 * TUPLE YE FIXED LENGTH KA ARRAY HOTA HE
 */
// const statusCode: [number, string] = [404, "Not Found"];
// const roles: [number, string] = [0, "Admin"];
// roles[1] = "sheroz";
// roles[0] = 4;
/**
 *  JAB MALOOM NAI HO DATA ME KIA AYE GA NUMBER YA STRING
 */
// let data: string | number;
// data = "raza";
// data = 10;
/**
 * FUNCTION
 */
// function myFun(num1: number, num2: number, condition: "add" | "subtract") {
//     if (condition === "add") {
//         return num1 + num2
//     } else if (condition === "subtract") {
//         return num1 - num2
//     }
// }
// console.log(myFun(5, 4, "add"));
// let resultAdd = myFun(5, 9, "add");
// let resultSub = myFun(5, 10, "subtract");
// let elementAdd = document.createElement("p");
// elementAdd.textContent = "Result Adding" + resultAdd;
// document.body.appendChild(elementAdd);
// let elementSub = document.createElement("p");
// elementSub.textContent = "Result Subtract" + resultSub;
// document.body.appendChild(elementSub);
/**
 * RETURN KARNE KE TIME
 * NUMBER | STRING BATAYEN GE
 * AGAR NAHI MALOOM TO (VOID) BATYEN GE
 */
var myFunc;
function add(num1, num2) {
    return num1 + num2;
}
myFunc = add;
console.log(myFunc);
