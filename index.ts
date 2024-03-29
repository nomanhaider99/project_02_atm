#!/usr/bin/env node
import inquirer from "inquirer";

const myPin: number = 3786;
let myBalance: number = 600000;
let login = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin: ",
        type: "number"
    }
])
console.log(login)
if(login.pin === myPin){
    console.log("correct pin..")
    let operation = await inquirer.prompt([
        {
            name: "operations", 
            type: "list", 
            message: "What do you want to do: ",
            choices: ["withdraw", "check balance"]
        }
    ])
    if(operation.operations === "withdraw"){
        let amount = await inquirer.prompt([
            {
                type: "number",
                name: "wamount",
                message: "Enter a withdraw amount: "
            }            
        ]);
        if(amount.wamount<myBalance){
            console.log(`You have ${myBalance-amount.wamount} ruppes left.`);
        }else{
            console.log("You don't have enough money!");
            
           }
        }
    else if(operation.operations === "check balance"){
        console.log(`You have ${myBalance} ruppes in your wallet.`);
        
    }
}else{
    console.log("Wrong pin!");
}



 




    