document.addEventListener("DOMContentLoaded", function () {

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const saveBtn = document.querySelector(".settings-btn");
  const profileName = document.getElementById("profileName");

  // 🔹 Load saved data
  const savedName = localStorage.getItem("username");
  const savedEmail = localStorage.getItem("email");

  if (savedName) {
    usernameInput.value = savedName;
    profileName.textContent = savedName; // profile me bhi show hoga
  }

  if (savedEmail) {
    emailInput.value = savedEmail;
  }

  // 🔹 Save button
  saveBtn.addEventListener("click", function () {

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();

    if (username === "" || email === "") {
      alert("Please fill all fields!");
      return;
    }

    // Save data
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    // Update profile name
    profileName.textContent = username;

    alert("Data saved successfully ✅");
  });

});