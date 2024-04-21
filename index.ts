#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;

while(condition)
    {
        let task = await inquirer.prompt(
            [
                {
                    name : "todo",
                    type : "list",
                    message : "What do you want to add in your Todos?",
                    choices : ["Salah", "Fast", "Predawn Meal", "Seclusion", "Recitation","Vigil"]
                },

                {
                    name : "addMore",
                    type : "confirm",
                    message : "Do you want to add more?",
                    default : "false"
                }
            ]
        );

        todos.push(task.todo);
        condition = task.addMore;
        console.log(todos)
        }