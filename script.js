const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const scrollTop = document.getElementById("scrollTop");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("show", window.scrollY > 500);
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    formStatus.textContent = "Please complete the required fields correctly.";
    formStatus.style.color = "#c0392b";
    contactForm.reportValidity();
    return;
  }

  formStatus.textContent = "Thank you. Your message is ready, but this demo form is not connected to email yet.";
  formStatus.style.color = "#1b998b";
  contactForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
