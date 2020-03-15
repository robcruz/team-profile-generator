const inquirer = require("inquirer");
const fs = require('fs');

require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

start();

async function start() {

    const employees = [];

    let manager = await inquirer.prompt([
        {
            message: "Enter manager's name:",
            name: "name"
        },
        {
            message: "Enter manager's email:",
            name: "email"
        },
        {
            message: "Enter manager's office number:",
            name: "officeNumber"
        }
    ]);

    let teamManager = new Manager();
    teamManager.name = manager.name;
    teamManager.email = manager.email;
    teamManager.officeNumber = manager.officeNumber;
    teamManager.id = employees.length + 1;

    employees.push(teamManager);

    while(true) {
        let employee = await inquirer.prompt({
            type: "checkbox",
            message: "Choose employee role you want to enter next:",
            name: "role",
            choices: [
                "Engineer",
                "Intern",
                "Done"
            ]
        });

        let role = employee.role.shift();

        if (role === 'Engineer') {
            let engineer = await inquirer.prompt([
            {
                message: "Enter engineer's name:",
                name: "name"
            },
            {
                message: "Enter engineer's email:",
                name: "email"
            },
            {
                message: "Enter engineer's Github account:",
                name: "github"
            }
        ]);

            let teamEngineer = new Engineer();
            teamEngineer.name = engineer.name;
            teamEngineer.email = engineer.email;
            teamEngineer.github = engineer.github;
            teamEngineer.id = employees.length + 1;

            employees.push(teamEngineer);

        } else if (role === 'Intern') {
            let intern = await inquirer.prompt([
                {
                    message: "Enter intern's name:",
                    name: "name"
                },
                {
                    message: "Enter intern's email:",
                    name: "email"
                },
                {
                    message: "Enter intern's School:",
                    name: "school"
                }
            ]);

            let teamIntern = new Intern();
            teamIntern.name = intern.name;
            teamIntern.email = intern.email;
            teamIntern.school = intern.school;
            teamIntern.id = employees.length + 1;

            employees.push(teamIntern);

        } else {
            console.log(employees);
            break;
        }
        console.log(employees)
    }
}
