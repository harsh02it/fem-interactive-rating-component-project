const boxContainer = document.querySelector(".box-container");
const thBoxContainer = document.querySelector(".th-box-container");
const submitButton = document.getElementById("submit");
const rates = document.querySelectorAll(".btn");
const finalRating = document.getElementById("rating");
const backButton = document.getElementById("back-button");

submitButton.addEventListener("click", () => {
  thBoxContainer.classList.remove("hidden");
  boxContainer.style.display = "none";
});

backButton.addEventListener("click", () => {
  thBoxContainer.classList.add("hidden");
  boxContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    finalRating.innerHTML = rate.innerHTML;
  });
});
