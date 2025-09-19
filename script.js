document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');

  // Toggle the mobile menu on click
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Close the mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('show')) {
        navList.classList.remove('show');
      }
    });
  });
});
