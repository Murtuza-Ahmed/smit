"use strict";
const button = document.querySelector("button"); //    ! Confirm Karta He
// button.addEventListener("click", () => {
//     console.log("clicked");
// });
function log(data) {
    console.log("clicked", data);
}
log("Hello");
function login(data) {
    console.log("DATA", data);
}
button.addEventListener("click", login.bind(null, "Raza")); // .bind FIRST null | this AND Argument
//# sourceMappingURL=app.js.map