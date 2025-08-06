// Example JavaScript for smooth scrolling navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

document.querySelectorAll(".grid-item").forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalTitle.textContent = item.dataset.title || "Untitled";
    modalDescription.textContent = item.dataset.description || "";
    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
