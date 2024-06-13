#! usr/bin/env node

import inquirer from "inquirer";

//Asking Question from users through inquirer

let answers = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one operator to perfrom Operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statment if.Eles

if (answers.operator === "Addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "Subtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "Multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("Invalid Operator!");
}
