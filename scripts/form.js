// js/form.js
// Populates product <select> from products array.

document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];

  const select = document.getElementById('product');
  if (!select) return;

  // Add options dynamically (preserve the first placeholder)
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;     // value should be unique id
    opt.textContent = p.name;
    select.appendChild(opt);
  });

  // Optional: small client-side validation for the date field (example)
  const form = document.getElementById('reviewForm');
  form.addEventListener('submit', (e) => {
    // Let HTML5 handle 'required' checks, but we can perform custom checks here if necessary.
    // Example: enforce a product selection (select has required, but this is extra)
    if (!select.value) {
      select.focus();
      e.preventDefault();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const lastMod = document.getElementById('lastModified');
  if (lastMod) {
    lastMod.textContent = "Last Modification: " + document.lastModified;
  }
});
