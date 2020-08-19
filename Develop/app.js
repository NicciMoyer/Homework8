const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let newTeam = [];

function getManagerInfo() {
    return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is your manager's employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your manager's e-mail address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your manager's office number?"
            }
        ])   
};

function getEngineerInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is their employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their e-mail address?"
            },
            {
                type: "input",
                name: "github",
                message: "Please provide their GitHub profile link:"
            }
        ])
        .then(response => {
            let engineer = new Engineer(response.name, response.id, response.email, response.github)
            newTeam.push(engineer)
            buildTeam();
        })
};

function getInternInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is their employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their e-mail address?"
            },
            {
                type: "input",
                name: "school",
                message: "Please provide the name of their school:"
            }
        ])
        .then(response => {
            let intern = new Intern(response.name, response.id, response.email, response.school)
            newTeam.push(intern)
        buildTeam();
        })
};

function buildTeam() {
    let options = ["engineer", "intern", "exit"]
    inquirer
        .prompt([{
            type: 'list',
            name: "employeeType",
            message: "Select which employee you would like to add next, or select exit if you're finished building your team.",
            editableList: false,
            choices: options
        }])
        .then(response => {
            if (response.employeeType === "engineer") {
                getEngineerInfo()
            } else if (response.employeeType === "intern") {
                getInternInfo()
            } else if (response.employeeType === "exit") {
                console.log("Your team is complete!")
                let newTable = render(newTeam)

                fs.writeFile(outputPath, newTable, function (err) {
                    if (err)
                        console.log(err)
                })
            }
        })
};

getManagerInfo()
.then(response => {
    let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
    newTeam.push(manager)
    buildTeam()
});


