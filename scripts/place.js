document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();

  // Last modified
  const lastModifiedSpan = document.getElementById("lastModified");
  lastModifiedSpan.textContent = document.lastModified;
});
