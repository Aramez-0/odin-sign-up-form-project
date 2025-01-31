let link = document.querySelector("#link");

link.addEventListener("click", () => {
    link.textContent += "🕺🏼💃🏽";
});


let pass = document.querySelector("#pass");
let comfPass = document.querySelector("#comf-pass");

comfPass.addEventListener("change", () => {
    if (comfPass.value !== pass.value) {
        comfPass.style = "border-color: red;";
    } else {
        comfPass.style = "border-color: #E5E7EB;";
    };
});


let btn = document.querySelector("button");
let fName = document.querySelector("#f-name");
let lName = document.querySelector("#l-name");
let email = document.querySelector("#email");
let phNum = document.querySelector("#ph-num");

btn.addEventListener("click", () => {
    if (fName.value === "" || lName.value === "" || email.value === "" || phNum.value === "" || pass.value === "" || comfPass.value === "") {
        btn.setAttribute("title", "Please fill out all fields");
        btn.style = "border-color: red;";
    } else {
        btn.setAttribute("title", "");
        btn.style = "border-color: #596D48;";
    };
});