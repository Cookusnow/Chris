var person = prompt("Please enter your name")

var food = prompt("What is your favorite snack?")

var drink = prompt("What is your favorite drink?")

if (person == null || person == "") {
    alert("Bruh");
  } else {
    alert("Hello " + person + ", it seems you enjoy eating " + food + " and drinking " + drink + "!");
  } 