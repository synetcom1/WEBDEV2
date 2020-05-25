var age = parseInt(prompt("How old are you?"));

if (age < 0) {
  document.write("You don't exist");
} else if (age < 20) {
  document.write("Study hard");
} else if (age < 40) {
  document.write("Make money");
} else if (age < 60) {
  document.write("Work more");
} else if (age < 100) {
  document.write("You are really old");
} else {
  document.write("Type a proper age");
}
