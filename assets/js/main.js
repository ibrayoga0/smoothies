// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add loading animation
  const body = document.body;
  body.classList.add("loaded");

  // Add current year to footer
  const yearSpan = document.querySelector(".current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add active state to current page in pagination
  const paginationLinks = document.querySelectorAll(".pagination a");
  const currentPage = window.location.pathname;

  paginationLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Smooth transition for script cards
  const scriptCards = document.querySelectorAll(".script-card");
  scriptCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add("fade-in");
  });

  // Add hover effect for discord buttons
  const discordButtons = document.querySelectorAll(".discord-btn");
  discordButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => {
      e.target.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", (e) => {
      e.target.style.transform = "scale(1)";
    });
  });
});

// Add some CSS animations
const styles = `
    .fade-in {
        opacity: 0;
        animation: fadeIn 0.8s ease-in forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .loaded {
        animation: pageLoad 0.6s ease-in-out;
    }

    @keyframes pageLoad {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

// Add styles to head
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
