const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

start();

async function start() {
    let employees = [];
    const managers = [];
    const engineers = [];
    const interns = [];

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
    teamManager.id = managers.length + 1;

    managers.push(teamManager);

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
            teamEngineer.id = interns.length + managers.length + engineers.length + 1;

            engineers.push(teamEngineer);

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
            teamIntern.id = interns.length + managers.length + engineers.length + 1;

            interns.push(teamIntern);

        } else {
            employees = managers.concat(engineers).concat(interns);
            console.log(employees);

            let managerHtml = generateManagerHtml(managers.shift());
            let htmlOutput = generateHTML(managerHtml, '', '')
            writeHtmlOutput(htmlOutput);
            break;
        }
    }

    // render html
}

function writeHtmlOutput(htmlOutput) {
    console.log(htmlOutput);

    let filename = path.join(__dirname, 'output', 'index.html')

    fs.writeFile(filename, htmlOutput, err => {
        if (err) {
            return console.log(err);
        }
        console.log(`Output: ${filename}`);
    });

    return filename
}

// name, id, email, officeNumber

function generateManagerHtml(manager){
    return `

            <div class="card text-center" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="mgmt-name">${manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted" id="mgmt-title">${manager.getRole()}</h6>
                    <p class="card-text">Email: <span id="mgmt-email">${manager.email}</span> </p>
                    <p class="card-text">Office Number: <span id="mgmg-office">${manager.officeNumber}</span> </p>
                </div>
            </div>
            
    `
}

function generateHTML(managerHtml, engineerHtml, internHtml) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Number Checker</title>
    <!-- Added link to the jQuery Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Added a link to Bootstrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>

<body>
    <div class="jumbotron">
        <h1 class="text-center">Web Apps Dev Team</h1>
        <h2 class="text-center">Greatest dev team in the whole wide world</h2>
    </div>

    <div class="container">

        <div class="row justify-content-center mb-3" id="mgmt-row">
        
        ${ managerHtml }
        
        </div>

        <div class="row justify-content-center mb-3" id="eng-row">

            <div class="col-auto">
                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="eng-name">Aleksei Cruz</h5>
                        <h6 class="card-subtitle mb-2 text-muted" id="eng-title">Engineer</h6>
                        <p class="card-text">Email: <span id="eng-email">alekseicruz@gmail.com</span> </p>
                        <p class="card-text">Github username: <span id="eng-github">robcruz</span> </p>
                    </div>
                </div>
            </div>


        </div>

        <div class="row justify-content-center mb-3" id="intern-row">

            <div class="col-auto">
                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="intern-name">Aleksei Cruz</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                        <p class="card-text">Email: <span id="intern-email">alekseicruz@gmail.com</span> </p>
                        <p class="card-text">Office Number: <span id="intern-office">123</span> </p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</body>

</html>

    `
}




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
//     let filename = path.join(__dirname, 'output', 'index.html')
//
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
//
//         if (err) {
//             return console.log(err);
//         }
//
//         console.log(`Output: ${filename}`);
//
//     });
// });





