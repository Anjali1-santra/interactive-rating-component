const mainContainer = document.querySelector(".main-container");
const finalContainer = document.querySelector(".final-container");
const button = document.getElementById("btn");
const rating = document.getElementById("rating");
const rate = document.querySelectorAll(".rates");

button.addEventListener("click", () => {
  finalContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rate.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
