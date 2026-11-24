// =========================================
// TechNova Solutions - Script
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNav");
  const backToTopBtn = document.getElementById("backToTop");
  const navCollapseEl = document.getElementById("navMenu");
  const bsCollapse = navCollapseEl ? new bootstrap.Collapse(navCollapseEl, { toggle: false }) : null;

  // Change navbar background on scroll + toggle back-to-top button
  function handleScroll() {
    const scrolled = window.scrollY > 40;

    navbar.classList.toggle("scrolled", scrolled);
    backToTopBtn.classList.toggle("show", window.scrollY > 400);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load

  // Back to top button click
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Close mobile nav menu after a link is clicked
  document.querySelectorAll("#navMenu .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (bsCollapse && navCollapseEl.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });

  // Simple contact form handling (demo only, no backend)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.reset();
      alert("Thanks for reaching out! We will get back to you soon.");
    });
  }
});
