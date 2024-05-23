// alert("Hello");

// window.alert("true");

var num = 123;
num = "hello";
console.log(num);

var num = null;
num = 123;
console.log(num);

var num1 = 5;
var num2 = 10;
var result = num1 + num2;
console.log(result);

var nameAndAddress = `My Name IS Sheroz Ahmed And
My Soscity Is Beutiful Place`;
// window.alert(nameAndAddress);

// const checkbox = document.getElementById('checkbox');
// const alertBox = document.getElementById('alert');

// checkbox.addEventListener('change', function () {
//     if (this.checked) {
//         showAlert();
//     } else {
//         hideAlert();
//     }
// });

// function showAlert() {
//     alertBox.style.display = 'block';
//     setTimeout(hideAlert, 3000); // Hide alert after 3 seconds
// }

// function hideAlert() {
//     alertBox.style.display = 'none';
// }

const checkbox = document.getElementById('checkbox');
const alertBox = document.getElementById('alert');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        showAlert();
    } else {
        hideAlert();
    }
});

function showAlert() {
    alertBox.innerHTML = '<span id="alertText">Checkbox is checked!</span><br><label for="alertCheckbox">Check this box:</label><input type="checkbox" id="alertCheckbox">';
    alertBox.style.display = 'block';
    setTimeout(hideAlert, 3000); // Hide alert after 3 seconds
}

function hideAlert() {
    alertBox.innerHTML = '';
    alertBox.style.display = 'none';
}