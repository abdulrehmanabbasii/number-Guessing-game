#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        TYPE: "number",
        message: "please guess a number between 1-10 ?",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation you guessed correct number winner.");
}
else {
    console.log("you guessed wrong number looser");
}
