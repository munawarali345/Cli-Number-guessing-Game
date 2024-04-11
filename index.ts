#! /user/bin/evn node

import inquirer from"inquirer";

// 1) Computer will generate a random number
// 2) user input for guessing number
                                                //range
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
  {
    name: "Userguessednumber",
    type: "number",
    message: "Please guess a number between 1-10:",
  },
]);

// 1) Computer will generate a random number -done
// 2) user input for guessing number -done

// 3) compair user input with computer generated number and show the result

if (answers.Userguessednumber === randomnumber) {
  console.log("Congratulations! you guess right number");
} else {
  console.log("you guess wrong number");
}

// 3) compair user input with computer generated number and show the result -done