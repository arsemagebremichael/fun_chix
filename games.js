const openBtn = document.getElementById("openPopupBtn");
const closeBtn = document.getElementById("closePopupBtn");
const overlay = document.getElementById("overlay");
openBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
}); // Close popup when clicking outside the popup box overlay.addEventListener('click', (e) => { if (e.target === overlay) { overlay.classList.add('hidden'); } });

               
                