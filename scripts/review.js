// js/review.js
// Read the GET query params, show a friendly confirmation and update a localStorage counter.
// After processing a "fresh" submission we remove the query string so refresh won't re-increment.

document.addEventListener('DOMContentLoaded', () => {
  // same product array so we can translate id -> name
  const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];

  const params = new URLSearchParams(window.location.search);
  const hasParams = [...params].length > 0;
  const summary = document.getElementById('summary');
  const thankYou = document.getElementById('thankYou');

  if (!summary || !thankYou) return;

  if (!hasParams) {
    // no query parameters -> show a message and the current counter
    thankYou.textContent = 'No recent submission detected';
    summary.innerHTML = `<p>If you just arrived at this page directly, go back to the <a href="form.html">form</a> to submit a review.</p>`;
    showCount();
    return;
  }

  // read submitted values
  const productId = params.get('product') || '';
  const product = products.find(p => p.id === productId);
  const productName = product ? product.name : productId || '(unknown product)';
  const rating = params.get('rating') || '(no rating)';
  const date = params.get('installationDate') || '(no date)';
  const reviewText = params.get('review') || '';
  const username = params.get('username') || '';
  const features = params.getAll('features'); // array of values

  // create human friendly summary
  let html = '';
  html += `<p><strong>Product:</strong> ${escapeHtml(productName)}</p>`;
  html += `<p><strong>Rating:</strong> ${escapeHtml(rating)} / 5</p>`;
  html += `<p><strong>Date of installation:</strong> ${escapeHtml(date)}</p>`;

  if (features && features.length) {
    html += `<p><strong>Features found useful:</strong> ${features.map(escapeHtml).join(', ')}</p>`;
  } else {
    html += `<p><strong>Features found useful:</strong> None selected</p>`;
  }

  if (reviewText) {
    html += `<p><strong>Review:</strong><br>${escapeHtml(reviewText)}</p>`;
  }

  if (username) {
    html += `<p><strong>Reviewed by:</strong> ${escapeHtml(username)}</p>`;
  }

  summary.innerHTML = html;
  thankYou.textContent = `Thank you for reviewing ${productName}!`;

  // increment localStorage counter once for this fresh submission
  incrementCounterThenStripQuery();

  // show count (reads from localStorage)
  showCount();

  // ---- helpers ----
  function showCount() {
    const countEl = document.getElementById('counter');
    const current = Number(localStorage.getItem('reviewCount') || 0);
    countEl.textContent = `Total reviews posted so far: ${current}`;
  }

  function incrementCounterThenStripQuery() {
    // increment
    const old = Number(localStorage.getItem('reviewCount') || 0);
    const next = old + 1;
    localStorage.setItem('reviewCount', String(next));

    // remove the query string so a browser refresh won't increment again
    // use history.replaceState to preserve the page but remove search params
    try {
      history.replaceState(null, '', window.location.pathname);
    } catch (e) {
      // if history not available, do nothing (rare)
    }
  }

  // simple HTML escape to avoid echoing raw user markup
  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;')
      .replaceAll('\n', '<br>');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const lastMod = document.getElementById('lastModified');
  if (lastMod) {
    lastMod.textContent = "Last Modification: " + document.lastModified;
  }
});
