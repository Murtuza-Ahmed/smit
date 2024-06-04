const button = document.querySelector("button")!; //    ! Confirm Karta He

// button.addEventListener("click", () => {
//     console.log("clicked");
// });

function log(data: any) {
    console.log("clicked", data)
}
log("Hello");

function login(data: string) {
    console.log("DATA", data)
}
button.addEventListener("click", login.bind(null, "Raza")); // .bind FIRST null | this AND Argument