// Scroll handler for header
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const logo = document.getElementById('logoImg');

    if (!header || !logo) return;

    if (window.scrollY > 20) {
      header.classList.add('scrolled');
      logo.src = 'public/for_White_BG.png';
    } else {
      header.classList.remove('scrolled');
      logo.src = 'public/for_Black_BG.png';
    }
  });
}

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('active');
}

// Modal functions
function openModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.add('active');
  document.body.classList.add('hidden-overflow');
}

function closeModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('active');
  document.body.classList.remove('hidden-overflow');
  document.getElementById('contactForm').reset();
}

// Close modal when clicking overlay
document.getElementById('contactModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('body').value,
  };

  emailjs.send(
    "service_on8ww2m",
    "template_svwpp8b",
    templateParams
  )
  .then(() => {
    alert("Message sent successfully!");
    document.getElementById('contactForm').reset();
    closeModal();
  })
  .catch((error) => {
    alert("Failed to send message.");
    console.error(error);
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  });
}

// Add staggered animation delays to service cards
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Only handle same-page anchors (start with #)
    if (href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (!target) return;

      const headerOffset = 0;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // else → allow normal redirect
  });
});

// NEW XXXXXXXXXXXX

// Modal functions
function openModalVideo() {
  const modal = document.getElementById('contactModalVideo');
  modal.classList.add('active');
  document.body.classList.add('hidden-overflow');
}
