// assign modal parent as a variable
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
// assign the button to a variable as well to shorten the coding
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
// assign the close(X mark) to a variable
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
// when btn object clicked(event) then the anymous function is heppening
btn.onclick = function () {
  modal.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};

// whenever the "X" = &times; is clicked the dispaly will go back to none
span.onclick = function () {
  modal.style.display = "none";
};
span2.onclick = function () {
  modal2.style.display = "none";
};

//
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
