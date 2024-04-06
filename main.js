#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter To Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount",
    }
]);
let userFromCurrency = userAnswer.from;
let userToCurrency = userAnswer.to;
let fromAmount = currency[userFromCurrency]; // exchange rate
let toAmount = currency[userToCurrency]; // exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // USD base currency // 4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
