const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let newTeam = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


function getManagerInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is your name?"
            },
            {
                type: "number",
                name: "employeeID",
                message: "What is your employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your e-mail address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?"
            }
        ])
        .then(response => {
            let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            newTeam.push(manager)
          })
          .then(response => {
            fs.writeFile("manager.html", function(err) {
              if (err) {
                return console.log(err);
              }
            })
          })
        }
function getEngineerInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is your name?"
            },
            {
                type: "number",
                name: "employeeID",
                message: "What is your employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your e-mail address?"
            },
            {
                type: "input",
                name: "github",
                message: "Please provide your GitHub profile link:"
            }
        ])
        .then(response => {
            let engineer = new Engineer(response.name, response.id, response.email, response.github)
            newTeam.push(engineer)
          })
          .then(response => {
            fs.writeFile("engineer.html", function(err) {
              if (err) {
                return console.log(err);
              }
            })
          })
        }

function getInternInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is your name?"
            },
            {
                type: "number",
                name: "employeeID",
                message: "What is your employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your e-mail address?"
            },
            {
                type: "input",
                name: "school",
                message: "Please provide the name of your school:"
            }])
            .then(response => {
                let intern = new Intern(response.name, response.id, response.email, response.school)
                newTeam.push(intern)
              }).then(response => {
                fs.writeFile("intern.html", function(err) {
                  if (err) {
                    return console.log(err);
                  }
                })
              })
            }

function buildTeam() {
    let options = ["engineer", "intern", "exit"]
    inquirer
        .prompt([{
            type: 'list-input',
            name: "employeeType",
            message: "Select which employee you would like to add next, or select exit if you're finished building your team.",
            editableList: false,
            choices: options
        },
        ])
    if (options === engineer) {
        getEngineerInfo()
    } else if (options === intern) {
        getInternInfo()
    } else if (options === exit) {
        console.log("Your team is complete!")
    }
};

getManagerInfo(); 
buildTeam();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
