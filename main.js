document.addEventListener("DOMContentLoaded", function () {
  const userName = "Brennane"; // In future, this can come from a real user profile
  const greeting = document.createElement("p");
  greeting.textContent = `Welcome, ${userName}!`;
  greeting.style.fontWeight = "bold";
  greeting.style.fontSize = "18px";
  greeting.style.marginTop = "10px";

  const header = document.querySelector("header");
  header.appendChild(greeting);
});
