const form = document.getElementById("myForm");
const toggle = document.getElementById("themeToggle");

// Dark mode toggle
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.innerText = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

// Form validation
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const stream = document.getElementById("stream");
    const languages = document.querySelectorAll(".lang:checked");

    document.querySelectorAll(".error").forEach(el => el.innerText = "");
    document.getElementById("successMsg").innerText = "";

    if (name.value.trim() === "") {
        showError(name, "Name required");
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        showError(email, "Invalid email");
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phone.value.match(phonePattern)) {
        showError(phone, "Enter 10 digit number");
        isValid = false;
    }

    if (password.value.length < 6) {
        showError(password, "Minimum 6 characters");
        isValid = false;
    }

    if (stream.value === "") {
        showError(stream, "Select stream");
        isValid = false;
    }

    if (languages.length === 0) {
        document.querySelector(".form-group .error").innerText = "Select language";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMsg").innerText = "Form Submitted Successfully!";
        form.reset();
    }
});

// Show error
function showError(input, message) {
    input.nextElementSibling.innerText = message;
}