var number = [];

number[0] = Number(prompt("Gimme a number"));
number[1] = Number(prompt("Another"));
number[2] = Number(prompt("Again"));

function math() {
    var combo = 0;
    numLength = num.length;
    for (i = 0; i < numLength; i++) {
        combo = combo + number[i];
    }
    showCombo.innerHTML = "The sum of your numbers is: " + combo;
};