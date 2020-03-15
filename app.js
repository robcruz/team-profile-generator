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
            teamEngineer.id = engineer.length + 1;
        } else if (role === 'Intern') {
            console.log(role)
        } else {
            break;
        }
        console.log(employee)
    }


}


// let { manager, stack, contact } = await inquirer.prompt([
//     {
//         type: "input",
//         message: "What is the manager's name?",
//         name: "manager"
//     },
//     {
//         type: "checkbox",
//         message: "What languages do you know?",
//         name: "stack",
//         choices: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MySQL"
//         ]
//     },
//     {
//         type: "list",
//         message: "What is your preferred method of communication?",
//         name: "contact",
//         choices: [
//             "email",
//             "phone",
//             "telekinesis"
//         ]
//     }
// ]);


// console.log(`Manager: ${manager}`)
// console.log(`Stack: ${stack}`)
// console.log(`Contact: ${contact}`)


// let { manager, stack, contact } = await inquirer.prompt([
//     {
//         type: "input",
//         message: "What is the manager's name?",
//         name: "manager"
//     },
//     {
//         type: "checkbox",
//         message: "What languages do you know?",
//         name: "stack",
//         choices: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MySQL"
//         ]
//     },
//     {
//         type: "list",
//         message: "What is your preferred method of communication?",
//         name: "contact",
//         choices: [
//             "email",
//             "phone",
//             "telekinesis"
//         ]
//     }
// ]);

// inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//     },
//     {
//         type: "checkbox",
//         message: "What languages do you know?",
//         name: "stack",
//         choices: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MySQL"
//         ]
//     },
//     {
//         type: "list",
//         message: "What is your preferred method of communication?",
//         name: "contact",
//         choices: [
//             "email",
//             "phone",
//             "telekinesis"
//         ]
//     }
// ]).then(function(data) {
//
//     var filename = data.name.toLowerCase().split(' ').join('') + ".json";
//
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
//
//         if (err) {
//             return console.log(err);
//         }
//
//         console.log("Success!");
//
//     });
// });
