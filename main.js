document.addEventListener("DOMContentLoaded", function () {
  const userName = "Brennane"; // You can make this dynamic later
  const greeting = document.createElement("p");
  greeting.textContent = `Welcome, ${userName}!`;
  greeting.style.fontWeight = "bold";
  greeting.style.fontSize = "18px";
  greeting.style.marginTop = "10px";

  const header = document.querySelector("header");
  header.appendChild(greeting);
});
