let number = Math.floor((Math.random() * 100) + 1);
let chances = 0;
let guess;

alert("This is a guessing game and you have to enter a number between 1 and 100. Let's begin!");

do {
    guess = prompt("Enter a number between 1 and 100:");
    guess = parseInt(guess);

    if (guess > number) {
        alert("Number entered is greater");
    } else if (guess < number) {
        alert("Number entered is smaller");
    }
    chances++;
} while (guess !== number);

let score = 100 - chances;
alert("Congratulations! 🥳🥳\nThe number generated was " + number + " and you guessed it right! 😁\nYour final score is " + score);
