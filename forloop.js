subjects = new Array("Java", "Web Dev I", "Web Dev II");
marks = new Array();

for (let i = 0; i < subjects.length; i++) {
  num = prompt("Enter you mark for " + subjects[i] + " subjects");
  marks[i] = parseInt(num);
}

msg = "";
for (let i = 0; i < subjects.length; i++)
  msg += subjects[i] + " marks: " + marks[i] + "\n";

document.getElementById("output").innerText = msg;
