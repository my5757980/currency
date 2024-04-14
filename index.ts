#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  DIN: 40,
};


const answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIN"],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIN"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter your amount",
  },
]);

let answerFrom = currency[answer.from];
let answer_to = currency[answer.to];
let amount = answer.amount
let baseAmount = amount/answerFrom
let convertAmount = baseAmount*answer_to
console.log(convertAmount);



console.log("The End");