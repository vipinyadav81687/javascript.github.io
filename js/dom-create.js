var newElement = document.createElement("h2");

var newText = document.createTextNode("This is just text")

newElement.appendChild(newText);

document.getElementById("test").appendChild(newElement);
console.log(newElement);
