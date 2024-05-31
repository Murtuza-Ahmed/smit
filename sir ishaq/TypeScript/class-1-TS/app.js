var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
;
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
/*
1| NUMBER 5
2| Decimal Number 5.5
3| (-) ME KOI VALUE AI ISKI TYPE BHI NUMBER HOGI
4| STRING
5| BOOLEAN TRUE/FALSE
*/
var person = "Sheroz";
person = "Sheikh";
var num;
num = 5;
var personName;
personName = "Sheikh";
var bool;
bool = false;
bool = true;
// ARRAY KI TYPE TYPE OF ARRAY
// const nameArr = ["sheroz", "raza", "ahmed", "sheikh", "murtuza"];
var nameArr = [];
nameArr.push("sheroz");
var numberArr = [];
numberArr.push(5);
// OBJECT KI TYPE TYPE OF OBJECT
var personObj = {
    name: "sheroz",
    age: 25,
    hobbies: ["football", "basketball"],
    // email: "" BEST PARACTICE
};
personObj.email = "murtuza.programmer@gmail.com";
var freindDetail = {
    name: "umer",
    age: 24,
    email: "umerabbas@gmail.com",
    hobbies: ["larkiBazi", "AuntiLover"]
};
var customer = [];
customer.push({
    name: "sheroz",
    age: 27,
    email: "umerabbas@gmail.com",
    hobbies: ["larkiBazi", "AuntiLover"]
});
console.log(customer);
// [TUPLE] ARRAY TYPESCRIPT
var statuses = [404, "not found", false]; // FIXED LENGTH
var roles = [0, "admin", true]; //FIXED LENGTH
var data;
data = "Ahemd";
data = 27;
data = true;
// Template Literal Types
// literal Type ham khud batate hn hame konsi string chaye
function myFunc(num1, num2, count) {
    // count === "add" ? num1 + num2 : "NaN";
    // count === "sub" ? num1 - num2 : "Nan";
    if (count === "add") {
        return num1 + num2
    } else if (count === "sub") {
        return num1 - num2
    }
}
console.log("ADDITION", myFunc(5, 10, "add"));
console.log("SUBTRACT", myFunc(5, 20, "sub"));
// console.log("DIVIDED", myFunc(2, 4, "divi"));
// FUNCTION
var myFuncAdd;
function multipule(num1, num2) {
    return num1 * num2;
}
myFuncAdd = multipule;
var result = myFuncAdd(5, 20);
console.log("RESULT", result);
