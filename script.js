// Login validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  const validUsers = ["mouse", "monkey", "cat", "crocodile", "sheep", "cockroach"];
  const validPasswords = ["24092024", "16012001"];

  if (validUsers.includes(username) && validPasswords.includes(password)) {
    window.location.href = "grievance.html"; // ✅ go to next page
  } else {
    document.getElementById("errorMsg").textContent = "Incorrect Username or Password";
  }
});
