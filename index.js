/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
if (votingAge > 18) {
  console.log("true");
} else {
  console.log("false");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let name = 1;
let age = 19;
if (age > name) {
  console.log(name - age);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

parseInt("1999");

//Task d: Write a function to multiply a*b

function myFunction(a, b) {
  console.log(a * b);
}

myFunction();

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to 7 dog years

let myAge = multi(19);

function multi(myAge) {
  console.log(myAge * 7);
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - .05% of their body weight
// 6 - 10 lbs - .04% of their body weight
// 11 - 15 lbs - .03% of their body weight
// > 15lbs - .02% of their body weight

let weight = adultDogs(15);

function adultDogs(weight) {
  if (weight <= 5) {
    console.log(weight * 0.05);
  } else if (weight <= 10) {
    console.log(weight * 0.04);
  } else if (weight <= 15) {
    console.log(weight * 0.03);
  } else {
    console.log(weight * 0.02);
  }
}

// adultDogs();

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight.
// 7 - 12 months 4% of their body weight

let dogAge = puppy(8);

function puppy(dogAge) {
  if (dogAge <= 4) {
    console.log(dogAge * 0.1);
  } else if (dogAge <= 7) {
    console.log(dogAge * 0.05);
  } else if (dogAge <= 12) {
    console.log(dogAge * 0.04);
  }
}

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use .ndom to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

let player = rockPaperSissors("paper");

function rockPaperSissors(player) {
  //com choice
  let comChoice = Math.floor(Math.random() * 3 + 1);
  //player to number
  if (player === "paper") {
    choice = 1;
  } else if (player === "rock") {
    choice = 2;
  } else if (player === "scissors") {
    choice = 3;
  } else {
    console.log("invalid query please reply 'paper', 'rock', 'scissors'");
  }
  //how to win
  if (choice === comChoice) {
    console.log("Draw!");
  }
  if (choice === 1) {
    if (comChoice === 2) {
      console.log("Com Wins! ");
    } else {
      console.log("You win!");
    }
  }
  if (choice === 2) {
    if (comChoice === 3) {
      console.log("Com Wins! ");
    } else {
      console.log("You win!");
    }
  }
  if (choice === 3) {
    if (comChoice === 1) {
      console.log("Com Wins! ");
    } else {
      console.log("You win!");
    }
  }
}

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// let km = kmToMiles(5);

function kmToMiles(km) {
  console.log(km * 0.62137);
}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

// let feet = feetToCM(3);

function feetToCM(feet) {
  console.log(feet * 30.48);
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

// var bottles = annoyingSong(9);

function annoyingSong(bottles) {
  for (i = 0; i < 10; i++, bottles--) {
    console.log(
      bottles +
        " bottles of soda on the wall, " +
        bottles +
        " bottles of soda, take one down pass it around " +
        bottles +
        " bottles of soda on the wall"
    );
  }
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
