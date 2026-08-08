// =====================================================
// register.js – Athena Registration & Login
// =====================================================
let currentStep = 0;
const steps = document.querySelectorAll(".step");
const bar = document.getElementById("bar");
let registeredUser = {};

// Update display step & progress bar
function updateStepView() {
  steps.forEach((s, index) => {
    s.classList.toggle("active", index === currentStep);
  });
  if (bar) {
    bar.style.width = ((currentStep +1 ) / 3 * 100) + "%";
  }
}
// mobile display compatibility 
const menuBtn = document.getElementById("menu-toggle") || document.querySelector("[data-menu-toggle]");
const mobileNav = document.getElementById("mobile-nav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.toggleAttribute("hidden");
  });
}
const themeBtn = document.getElementById("theme-toggle") || document.querySelector("[data-theme-toggle]");

// Clear error texts
function clearErrors() {
  document.querySelectorAll(".error-msg").forEach(err => err.textContent = "");
}

// Step 1 Validation
function validateStep1() {
  clearErrors();
  let isValid = true;

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();

  // Name regex: letters, spaces, hyphens only
  const namePattern = /^[A-Za-z\s-]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fname || !namePattern.test(fname)) {
    document.getElementById("fname-err").textContent = "Valid first name required (letters only).";
    isValid = false;
  }
  if (!lname || !namePattern.test(lname)) {
    document.getElementById("lname-err").textContent = "Valid last name required (letters only).";
    isValid = false;
  }
  if (!email || !emailPattern.test(email)) {
    document.getElementById("email-err").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  return isValid;
}

// Restrict Phone Field to Digits Only
const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });
}

// Step 2 Validation
function validateStep2() {
  clearErrors();
  let isValid = true;

  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const coffee = document.getElementById("coffee").value;

  // Greek mobile numbers start with 6 and total exactly 10 digits
  const greekPhonePattern = /^6\d{9}$/;

  if (!phone || !greekPhonePattern.test(phone)) {
    document.getElementById("phone-err").textContent = "Greek phone must be 10 digits starting with 6.";
    isValid = false;
  }

  if (!dob) {
    document.getElementById("dob-err").textContent = "Please select your date of birth.";
    isValid = false;
  }

  if (dob) {
  const birthYear = new Date(dob).getFullYear();
  if (birthYear < 1931 || birthYear > 2014) {
    document.getElementById("dob-err").textContent = "Please enter a birth year of 1931 or later, and earlier than 2014";
    isValid = false;
  }
}

  if (!coffee) {
    document.getElementById("coffee-err").textContent = "Please pick a preferred coffee.";
    isValid = false;
  }

  return isValid;
}

// Step 3 Validation
function validateStep3() {
  clearErrors();
  let isValid = true;

  const pass = document.getElementById("pass").value;
  const confirm = document.getElementById("confirm").value;
  const terms = document.getElementById("terms").checked;

  if (pass.length < 8) {
    document.getElementById("pass-err").textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  if (pass !== confirm) {
    document.getElementById("confirm-err").textContent = "Passwords do not match.";
    isValid = false;
  }

  if (!terms) {
    document.getElementById("terms-err").textContent = "You must agree to the terms.";
    isValid = false;
  }

  return isValid;
}

// Button Handlers
document.getElementById("n1").onclick = () => {
  if (validateStep1()) {
    currentStep = 1;
    updateStepView();
  }
};

document.getElementById("n2").onclick = () => {
  if (validateStep2()) {
    currentStep = 2;
    updateStepView();
  }
};

document.querySelectorAll(".back").forEach((btn) => {
  btn.onclick = () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepView();
    }
  };
});

// Final Registration Handler
document.getElementById("register").onclick = () => {
  if (validateStep3()) {
    registeredUser.fname = document.getElementById("fname").value.trim();
    registeredUser.email = document.getElementById("email").value.trim();
    registeredUser.pass = document.getElementById("pass").value;

    document.getElementById("form").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }
};

// Login Handler with Rubric Greeting
document.getElementById("loginBtn").onclick = () => {
  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPass = document.getElementById("loginPass").value;
  const greetingBox = document.getElementById("greeting");

  if (loginEmail === registeredUser.email && loginPass === registeredUser.pass) {
    greetingBox.textContent = `Welcome back, ${registeredUser.fname}! Your table reservation request is confirmed. ☕`;
    greetingBox.classList.remove("hidden");
  } else {
    alert("Invalid credentials. Please enter your registered email and password.");
  }
};

// Set footer year
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

updateStepView();