// Toggle mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scrolling for anchor links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust for fixed header
      behavior: 'smooth'
    });
  });
});