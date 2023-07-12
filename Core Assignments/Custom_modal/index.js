const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const body = document.getElementsByTagName("body")[0];

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  body.style.overflow = "auto";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
});
