document.getElementById("grievanceForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Your grievance has been submitted 💌");
    window.location.href = "thankyou.html";
  });
  