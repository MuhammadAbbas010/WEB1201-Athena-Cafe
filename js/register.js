// =====================================================
// register.js – Athena Registration & Login
// =====================================================

let step = 0;
let steps = document.querySelectorAll(".step");
let bar = document.getElementById("bar");
let reg = {};

function show() {
    steps.forEach((s, i) => s.classList.toggle("active", i === step));
    bar.style.width = ((step + 1) / 3 * 100) + "%";
}

function valid1() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    
    if (!fname.value || !lname.value || !email.value.includes("@")) {
        alert("Please complete Step 1.");
        return false;
    }
    return true;
}

function valid2() {
    let phone = document.getElementById("phone");
    let dob = document.getElementById("dob");
    
    if (!phone.value || !dob.value) {
        alert("Please complete Step 2.");
        return false;
    }
    return true;
}

document.getElementById("n1").onclick = () => {
    if (valid1()) {
        step = 1;
        show();
    }
};

document.getElementById("n2").onclick = () => {
    if (valid2()) {
        step = 2;
        show();
    }
};

document.querySelectorAll(".back")[0].onclick = () => {
    step = 0;
    show();
};

document.querySelectorAll(".back")[1].onclick = () => {
    step = 1;
    show();
};

document.getElementById("register").onclick = () => {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let confirmPass = document.getElementById("confirm");
    let terms = document.getElementById("terms");
    let form = document.getElementById("form");
    let login = document.getElementById("login");
    
    if (pass.value.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    if (pass.value !== confirmPass.value) {
        alert("Passwords do not match.");
        return;
    }
    if (!terms.checked) {
        alert("Accept the terms.");
        return;
    }
    
    reg.email = email.value;
    reg.pass = pass.value;
    form.classList.add("hidden");
    login.classList.remove("hidden");
};

document.getElementById("loginBtn").onclick = () => {
    let loginEmail = document.getElementById("loginEmail");
    let loginPass = document.getElementById("loginPass");
    
    if (loginEmail.value === reg.email && loginPass.value === reg.pass) {
        alert("Login Successful! Welcome back! ☕");
    } else {
        alert("Incorrect email or password.");
    }
};

show();