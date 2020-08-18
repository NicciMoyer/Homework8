// TODO: Write code to define and export the Employee class
let inquirer = require("inquirer");
const { getDiffieHellman } = require("crypto");

class Employee {
    constructor (name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getID () {
        return this.id
    }

    getEmail () {
        return this.id
    }
    getName () {
        return this.name
    }
};

    

 

inquirer
    .prompt([
    {
        type: "input",
        name: "employeeName", 
        message: "What is your name?"
    },
    {
        type: "input",
        name: "email", 
        message: "What is your e-mail address?"
    }]);

