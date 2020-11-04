var name = prompt("What's your first name? ");
var number1 = prompt("Gimme a number: ");
var number2 = prompt("Gimme another one: ");

function fname() {
    showName.innerHTML = "You're gonna have a pretty cool day, " + name + ".";
}

function math() {
    var combo = Number(number1) + Number(number2);
    showNum.innerHTML = "Yo, the sum of your numbers is " + combo + ".";
}
