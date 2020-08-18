// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
let inquirer = require("inquirer");
const { getDiffieHellman } = require("crypto");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, gitHubLink){
    super (name, id, email)
    this.gitHubLink = gitHubLink;
    }
    getGitHub () {
        return this.gitHubLink
    }

};