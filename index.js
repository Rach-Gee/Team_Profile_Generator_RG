const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const markdown = require('./src/markdown');

const employees = [];

function askForInternOrEngineer() {

    return inquirer.prompt([
        {
            type: "list",
            choices: [
                "Intern",
                "Engineer",
                "No"
            ],
            name: 'answer',
            message: "Do you want to add another employee?",
        }
    ]).then((response) => {
        switch (response.answer) {
            case "No":
                renderPage(employees)
                break;
            case "Engineer":
                askForEmployee(response.answer)
                    .then((answers) => {
                        employees.push(new Engineer(...Object.values(answers)));
                    })
                    .then(() => askForInternOrEngineer());
                break;
            case "Intern":
                askForEmployee(response.answer)
                    .then((answers) => {
                        employees.push(new Intern(...Object.values(answers)));
                    })
                    .then(() => askForInternOrEngineer());
                break;
        }
    })
}


function init() {

    return askForEmployee('manager')
        .then((answers) => {
            employees.push(new Manager(...Object.values(answers)));
            askForInternOrEngineer()
        })
        .catch((err) => {
            console.log(err)
        })
}

init()

function askForEmployee(type = 'Manager') {

    const baseQuestion = [
        {
            type: "number",
            name: "id",
            message: `Please provide the ${type}'s Employee ID`,
            validate: (answer) => {
                if (isNaN(answer)) {
                    return "Please select a number";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "name",
            message: `Please provide the ${type}'s name`,
        },
        {
            type: "input",
            name: "email",
            message: `Please provide the ${type}'s email address`,
            validate: (answer) => {
                if (!answer.includes("@") ) {
                    return "Please ensure you have entered a valid email";
                }
                return true;
            }
        },
    ];

    switch (type.toLowerCase()) {
        case 'manager':
            baseQuestion.push({
                type: "number",
                name: "officeNumber",
                message: "Please provide the Managers office number",
                validate: (answer) => {
                    if (isNaN(answer)) {
                        return "Please select a number";
                    }
                    return true;
                }
            });
            break;
        case 'engineer':
            baseQuestion.push({
                type: "input",
                name: "gitHub",
                message: "Please provide the Engineers GitHub account",
            });
            break;
        case 'intern':
            baseQuestion.push({
                type: "input",
                name: "school",
                message: "Please provide the school the Inter attended",
            });
            break;
        default:
            throw new Error("You must select Manager, Engineer or Intern")

    }
    return inquirer.prompt(baseQuestion)
}


function renderPage(employees) {
    try {
        fs.writeFileSync('index.html', markdown.generatePage())
    } catch (err) { console.error(err) }


    try {
        for (let index = 0; index < employees.length; index++) {
            const employee = employees[index];

            if (employee.constructor.name === "Manager") {
                fs.appendFileSync('index.html', markdown.generateManager(employee))
            }

            if (employee.constructor.name === "Engineer") {
                fs.appendFileSync('index.html', markdown.generateEngineer(employee))
            }

            if (employee.constructor.name === "Intern") {
                fs.appendFileSync('index.html', markdown.generateIntern(employee))
            }
        }
    } catch (err) { console.error(err) }

    try {
        fs.appendFileSync('index.html', markdown.generateEnd())
    } catch (err) { console.error(err) }

}







