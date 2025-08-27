document.getElementById("contactForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  if (email !== confirmEmail) {
    e.preventDefault();
    alert("Email addresses do not match!");
  }
});