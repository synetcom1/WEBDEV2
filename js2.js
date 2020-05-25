// Constructor way
// new Function
// all parameters ar in strings separated by comma, also return as well
var addFunction = new Function("a", "b", "return a+b;");

var answer = addFunction(3, 5);
document.getElementById("output").innerHTML = answer;
