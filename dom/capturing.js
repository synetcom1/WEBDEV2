document.getElementById("myP").addEventListener('click', function () {
    alert("You clicked P element");
}, false);

// the value is False = Bubbling(FaceBook)
// the values is True = Capturing

document.getElementById("myDiv").addEventListener('click', function () {
    alert("You clicked DIV element");
}, false);

document.getElementById("myP2").addEventListener('click', function () {
    alert("You clicked P element");
}, true);

document.getElementById("myDiv2").addEventListener('click', function () {
    alert("You clicked DIV element");
}, true);