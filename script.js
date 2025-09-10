// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("header ul");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("show");
  });
});

// Profile picture upload
const profilePic = document.getElementById("profile-pic");
const fileInput = document.getElementById("fileInput");

profilePic.addEventListener("click", () => {
  fileInput.click(); // Open file dialog when image clicked
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePic.src = e.target.result; // Replace image with uploaded one
    };
    reader.readAsDataURL(file);
  }
});
