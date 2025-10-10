// ===== MENU TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      // Toggle the 'active' class on navbar
      navbar.classList.toggle("active");
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll(".navbar a, #bookNowBtn").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetID = link.getAttribute("href");
      if (targetID && targetID.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetID);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        // Close navbar after clicking a link (mobile)
        navbar.classList.remove("active");
      }
    });
  });

  // ===== FEEDBACK CARDS =====
  const feedbacks = [
    { name: "John D.", comment: "Excellent insulation testing! Professional and on-time." },
    { name: "Sarah P.", comment: "They helped balance our electrical load efficiently. Highly recommended!" },
    { name: "Marco A.", comment: "Very knowledgeable engineers. Fast response and clean setup." },
  ];

  const feedbackContainer = document.querySelector(".feedback-container");
  if (feedbackContainer) {
    feedbacks.forEach((fb) => {
      const card = document.createElement("div");
      card.classList.add("feedback-card");
      card.innerHTML = `
        <p>"${fb.comment}"</p>
        <h4>- ${fb.name}</h4>
      `;
      feedbackContainer.appendChild(card);
    });
  }

  // ===== LOCAL STORAGE VISIT TRACKER =====
  let count = parseInt(localStorage.getItem("visitCount")) || 0;
  count++;
  localStorage.setItem("visitCount", count);

  if (count === 1) {
    console.log("Welcome to Volt Ampere Electrical Solutions — first time visit!");
  } else if (count < 5) {
    console.log(`Welcome back! You've visited ${count} times.`);
  } else {
    console.log(`You're a loyal visitor! ${count} visits — thank you!`);
  }

  // ===== SERVICE MESSAGE FUNCTION =====
  window.displayServiceMessage = function (serviceName) {
    const message = `You selected our "${serviceName}" package — thank you for trusting Volt Ampere Electrical Solutions!`;
    alert(message);
  };
});
