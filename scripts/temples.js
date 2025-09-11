// Toggle nav menu for mobile
document.addEventListener("DOMContentLoaded", () => {
  // Last Modified
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

  // Hamburger Menu
  const menuButton = document.getElementById("menu");
  const nav = document.querySelector("nav");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});


