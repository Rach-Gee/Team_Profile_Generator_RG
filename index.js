const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const managerQuestion = [{
    type: "number",
    name: "id",
    message: "Please provide the Managers Employee ID",
},
{
    type: "input",
    name: "name",
    message: "Please provide the Managers name",
},
{
    type: "input",
    name: "email",
    message: "Please provide the Managers email address",
},
{
    type: "number",
    name: "officeNumber",
    message: "Please provide the Managers office number",
}
];

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
                console.log(employees)
                //TODO: stop the program and 
                // renderHTML()
                break;
            default:
                askForEmployee(response.answer)
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
        },
    ];

    switch (type.toLowerCase()) {
        case 'manager':
            baseQuestion.push({
                type: "number",
                name: "officeNumber",
                message: "Please provide the Managers office number",
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


