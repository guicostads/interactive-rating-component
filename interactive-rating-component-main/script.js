let allRatings = document.getElementsByClassName("rate");
let submit = document.getElementById("submit");
let ratingCard = document.querySelector(".rating-card");
let thanks = document.querySelector(".thanks");
let selected = document.querySelector("span");
let goBack = document.getElementById("goBack");
let rateValue = 0;

for (let i = 0; i < allRatings.length; i++) {
  allRatings[i].onclick = function () {
    // remove sibling class
    let clicked = allRatings[0];
    while (clicked) {
      if (clicked.tagName == "P") {
        // remove class
        clicked.classList.remove("selected");
      }
      // pass to the next sibling
      clicked = clicked.nextSibling;
    }
    this.classList.add("selected");
    rateValue = allRatings[i].textContent;
  };
}

submit.addEventListener("click", () => {
  if (rateValue == 0) {
    alert("Please, select a valid rating.");
  } else {
    ratingCard.style.display = "none";
    thanks.style.display = "flex";
    selected.textContent = rateValue;
  }
});

goBack.addEventListener("click", () => {
  thanks.style.display = "none";
  ratingCard.style.display = "block";
});
