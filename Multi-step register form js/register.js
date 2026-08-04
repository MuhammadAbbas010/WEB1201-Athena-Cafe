// Help keep track of current progress stage 
let step = 0;
let steps = document.querySelectorAll(".step");
let bar = document.getElementById("bar");
let reg = {};

// Show whichever step the user is currently on.
function show() {
    steps.forEach((s, i) => s.classList.toggle("active", i === step));
    bar.style.width = ((step + 1) / 3 * 100) + "%";
}

function valid1() {
    if (!fname.value || !lname.value || !email.value.includes("@")) {
        alert("Please complete Step 1.");
        return false;
    }
    return true;
}

function valid2() {
    if (!phone.value || !dob.value) {
        alert("Please complete Step 2.");
        return false;
    }
    return true;
}

n1.onclick = () => {
    if (valid1()) {
        step = 1;
        show();
    }
};

n2.onclick = () => {
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

// Validates final step before registration.
register.onclick = () => {
    if (pass.value.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    if (pass.value !== confirm.value) {
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

loginBtn.onclick = () => {
    if (loginEmail.value === reg.email && loginPass.value === reg.pass) {
        alert("Login Successful!");
    } else {
        alert("Incorrect email or password.");
    }
};

show();