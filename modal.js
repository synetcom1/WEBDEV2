// assign modal parent as a variable
var modal = document.getElementById("myModal");

// assign the button to a variable as well to shorten the coding
var btn = document.getElementById("myBtn");

// assign the close(X mark) to a variable
var span = document.getElementsByClassName("close")[0];

// when btn object clicked(event) then the anymous function is heppening
btn.onclick = function () {
  modal.style.display = "block";
};

// whenever the "X" = &times; is clicked the dispaly will go back to none
span.onclick = function () {
  modal.style.display = "none";
};

// whenever the event(click), the target(the object clicked) will have display none
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
