// ------------------------------
// Part 1: Event Handling (Theme Toggle)
// ------------------------------
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? " Light Mode" : " Dark Mode";
});

// ------------------------------
// Part 2: Interactive Elements (Counter)
// ------------------------------
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// ------------------------------
// Part 2: Interactive Elements (FAQ Toggle)
// ------------------------------
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ------------------------------
// Part 3: Form Validation
// ------------------------------
const form = document.getElementById("signupForm");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting immediately

  let isValid = true;

  // Validate Name (must not be empty)
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate Password (min 6 chars)
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Show success message if valid
  if (isValid) {
    document.getElementById("formSuccess").textContent =
      " Form submitted successfully!";
    form.reset(); // Clear fields
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});
