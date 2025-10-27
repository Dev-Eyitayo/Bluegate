// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Track open/close state
let isMenuOpen = false;

hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent event bubbling to window
  mobileMenu.classList.toggle('show');
  isMenuOpen = !isMenuOpen;

  // Toggle between hamburger (☰) and close (×)
  if (isMenuOpen) {
    hamburger.classList.add('open');
  } else {
    hamburger.classList.remove('open');
  }
});

// Close when clicking outside
window.addEventListener('click', (e) => {
  if (isMenuOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.remove('show');
    hamburger.classList.remove('open');
    isMenuOpen = false;
  }
});

// ===== CAROUSEL =====
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let current = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

document.getElementById('nextBtn').onclick = () => showSlide(current + 1);
document.getElementById('prevBtn').onclick = () => showSlide(current - 1);

// Auto-slide every 5 seconds
setInterval(() => showSlide(current + 1), 5000);
