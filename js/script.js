// ========== Mobile Nav Toggle (If You Add a Burger Menu) ==========
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');
  });
}

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ========== Scroll Animation Placeholder ==========
window.addEventListener('scroll', () => {
  // Example: Animate sections on scroll if needed
  // You can use IntersectionObserver for cleaner setup later
});

// ========== Page Ready ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log("Media Crux Homepage Loaded");
});
