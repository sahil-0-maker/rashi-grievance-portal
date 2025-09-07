// Redirect to index.html if the page is refreshed or opened directly
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  if (!window.location.pathname.endsWith("index.html") && 
      !window.location.pathname.endsWith("/") ) {
    window.location.href = "index.html";
  }
}


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

// Grievance form submission
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
