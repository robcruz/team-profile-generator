const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

start();

async function start() {
    const managers = [];
    const engineers = [];
    const interns = [];

    let managerPrompt = await inquirer.prompt([
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

    let manager = new Manager();
    manager.name = managerPrompt.name;
    manager.email = managerPrompt.email;
    manager.officeNumber = managerPrompt.officeNumber;
    manager.id = managers.length + 1;

    managers.push(manager);

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
            let engineerPrompt = await inquirer.prompt([
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

            let engineer = new Engineer();
            engineer.name = engineerPrompt.name;
            engineer.email = engineerPrompt.email;
            engineer.github = engineerPrompt.github;
            engineer.id = interns.length + managers.length + engineers.length + 1;

            engineers.push(engineer);

        } else if (role === 'Intern') {
            let internPrompt = await inquirer.prompt([
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

            let intern = new Intern();
            intern.name = internPrompt.name;
            intern.email = internPrompt.email;
            intern.school = internPrompt.school;
            intern.id = interns.length + managers.length + engineers.length + 1;

            interns.push(intern);

        } else {
            let managerHtml = generateManagerHtml(managers.shift());
            let engineerHtml = '';
            for (let engineer of engineers) engineerHtml += generateEngineerHtml(engineer);
            let internHtml = '';
            for (let intern of interns) internHtml += generateInternHtml(intern);
            let engineerSeparator = "";
            if (engineers.length > 0) engineerSeparator = "<hr>";
            let internSeparator = "";
            if (interns.length > 0) internSeparator = "<hr>";
            let htmlOutput = generateHTML(managerHtml, engineerSeparator, engineerHtml, internSeparator, internHtml);
            writeHtmlOutput(htmlOutput);
            break;
        }
    }
}

function writeHtmlOutput(htmlOutput) {
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
                    <h5 class="card-title">${manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
                    <p class="card-text">Email: <span>${manager.email}</span> </p>
                    <p class="card-text">Office Number: <span>${manager.officeNumber}</span> </p>
                </div>
            </div>
    `
}

// name, id, email, github
function generateEngineerHtml(engineer){
    return `
            <div class="col-auto">
                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${ engineer.name }</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${ engineer.getRole() }</h6>
                        <p class="card-text">Email: <span>${ engineer.email }</span> </p>
                        <p class="card-text">Github username: <span>${ engineer.github }</span> </p>
                    </div>
                </div>
            </div>
    `
}

// name, id, email, school
function generateInternHtml(intern){
    return `
            <div class="col-auto">
                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${ intern.name }</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${ intern.getRole() }</h6>
                        <p class="card-text">Email: <span>${ intern.email }</span> </p>
                        <p class="card-text">School: <span>${ intern.school }</span> </p>
                    </div>
                </div>
            </div>
    `
}

function generateHTML(managerHtml, engineerSeparator, engineerHtml, internSeparator, internHtml) {
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

        <div class="row justify-content-center mb-3">
        ${ managerHtml }
        </div>

        ${ engineerSeparator }

        <div class="row justify-content-center mb-3">
        ${ engineerHtml }
        </div>

        ${ internSeparator }

        <div class="row justify-content-center mb-3">
        ${ internHtml }
        </div>

    </div>
</body>

</html>
    `
}




