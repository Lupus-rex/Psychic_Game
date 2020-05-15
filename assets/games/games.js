var userNumber = 10;
var counter = 0;
var maxTries = 6; // max number of times to guess

var randomNumber = attempts(math.random() * userNumber) + 1;

while (attempts != randomNumber) {
  var attempts = prompt("Please pick a number between 1 and" + userNumber);
  counter += 1;

  if (counter > maxTries) {
    break;
    document.write("You've Run Out Of Tries. Refresh To Play Again");
  }

  if (attempts == randomNumber) {
    document.write("Congrats You Have The Correct Number!");
    document.write("<p> The Random Number Was" + randomNumber + "</p>");
    document.write(
      "<p> It Took you" + counter + "Attempts To Get The Correct Number </p>"
    );
  }
}

console.log("Program Complete");
