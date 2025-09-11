// Display last modified date and toggle nav menu for mobile
document.addEventListener("DOMContentLoaded", () => {
  // Last Modified
  const lastModifiedElem = document.getElementById("lastModified");
  if (lastModifiedElem) {
    lastModifiedElem.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Hamburger Menu
  const menuButton = document.getElementById("menu");
  const nav = document.querySelector("nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
}
});