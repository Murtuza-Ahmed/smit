// var firstName = "Raza";
// var lastName = "Ahmed";
// console.log(firstName + " " + lastName);

// var userName = prompt();
// console.log(userName);

// var number1 = +prompt();
// var number2 = parseInt(prompt());
// console.log(number1 + number2);
// console.log(typeof (number2));


// <!--        IF STATMENT          -->

if (true) {
    console.log("hello")
}

//  CASE STATMENT
// var city = prompt("Enter Your City");
// var cityCase = city.toLowerCase();
// if (cityCase === "karachi") {
//     console.log("Rain");
// } else {
//     console.log("No't Rain");
// }

// var cityCase = city.toLowerCase();
// if (cityCase !== "karachi") {
//     console.log("Rain");
// } else {
//     console.log("No't Rain");
// }

// var age = +prompt("Enter Your Age");

// if (age >= 20) {
//     console.log("Enter");
// } else if (age >= 15) {
//     console.log("Batate hn Bad me")
// } else {
//     console.log("Not Enter");
// }

var num1 = +prompt("Enter Your Number");
var num2 = +prompt("Enter your Number");
var opt = prompt("Enter Operator");

if (num1 + num2 && opt === "+") {
    console.log(num1 + num2);
} else if (num1 - num2 && opt === "-") {
    console.log(num1 - num2);
} else if (num1 * num2 && opt === "*") {
    console.log(num1 * num2);
} else if (num1 / num2 && opt === "/") {
    console.log(num1 / num2)
} else if (num1 % num2 && opt === "%") {
    console.log(num1 % num2)
} else {
    console.log("please correct answer");
}

var x = 5;
var y = 3;
var z = x ** y;
console.log(z);