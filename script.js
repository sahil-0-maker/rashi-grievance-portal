// --- Redirect back to index.html on refresh if not logged in ---
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  if (!window.location.pathname.endsWith("index.html") && 
      !window.location.pathname.endsWith("/")) {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      window.location.href = "index.html";
    }
  }
}

// --- Protect grievance.html & thankyou.html from direct access ---
const protectedPages = ["grievance.html", "thankyou.html"];
protectedPages.forEach(page => {
  if (window.location.pathname.endsWith(page)) {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      window.location.href = "index.html";
    }
  }
});

// --- Login validation ---
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim().toLowerCase();

  const validUsers = ["mouse", "monkey", "cat", "crocodile", "sheep", "cockroach", "bhedu", "rashbash", "catie", "doggo", "rashi", "rashika", "hon"];
  const validPasswords = ["24092024", "16012001", "love"];

  if (validUsers.includes(username) && validPasswords.includes(password)) {
    sessionStorage.setItem("isLoggedIn", "true"); // ✅ stays until browser tab closed
    window.location.href = "grievance.html";
  } else {
    document.getElementById("errorMsg").textContent = "Incorrect Username or Password";
  }
});

// --- Grievance form submission ---
document.getElementById("grievanceForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const formData = {
    title: document.querySelector("input[name='title']").value,
    details: document.querySelector("textarea[name='details']").value,
    mood: document.querySelector("select[name='mood']").value,
    severity: document.querySelector("select[name='severity']").value
  };

  fetch("https://script.google.com/macros/s/AKfycbwzXGqq_9yRoUjA8suV7ppdAAqitt2IGMduue7o2iJsfC-TKs3LKNvdTyg-OW6HiZg/exec", {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(res => res.text())
  .then(data => {
    window.location.href = "thankyou.html";
  })
  .catch(err => alert("Error submitting grievance!"));
});


// --- Logout button ---
document.getElementById("logoutBtn")?.addEventListener("click", function() {
  sessionStorage.clear(); // remove login flag
  window.location.href = "index.html"; // go back to home page
});

