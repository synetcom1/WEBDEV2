var numbering = function () {
  var text = "";
  var i = 0;
  do {
    text += "<br> The number is " + i;
    i++;
  } while (i < 5);
  document.getElementById("output").innerHTML = text;
};
numbering();
