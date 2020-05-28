let num = 0;

// Replace image and alt with the array
imgArray = [
  ["images/ocean1.jpg", "ocean 1"],
  ["images/ocean2.jpg", "ocean 2"],
  ["images/ocean3.jpg", "ocean 3"],
];

// Replace with you image id(manual change)
function slideshow(slide_num) {
  document.getElementById("slide").src = imgArray[slide_num][0];
  document.getElementById("slide").alt = imgArray[slide_num][1];
}

// autoplay
function playImageArray() {
  if (num == imgArray.length) {
    num = 0;
  }
  document.getElementById("slide").src = imgArray[num][0];
  num += 1;
}
