#! /usr/bin/env node
import inquirer from "inquirer";
// Asking Questions From Users Through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter the First Number", type: "number", name: "firstNumber" },
    { message: "Enter the Second Number", type: "number", name: "secondNumber" },
    {
        message: "Please Select One Operator To Perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// Conditional Statements
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Substraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
