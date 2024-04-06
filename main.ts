#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
    USD: 1, // Base Currency:
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>  ${chalk.bold.hex('#9999FF')('Welcome To \'Code With Malik Hunain\' - Currency Converter App ')}  <<<===========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<======================================>>>\n`));


let userAnswer = await inquirer.prompt(
    [
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
    ]
);

let userFromCurrency = userAnswer.from
let userToCurrency = userAnswer.to
let fromAmount = currency[userFromCurrency] // exchange rate
let toAmount = currency[userToCurrency] // exchange rate
let amount = userAnswer.amount
let baseAmount = amount / fromAmount // USD base currency // 4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
