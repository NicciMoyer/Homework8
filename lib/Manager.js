// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let inquirer = require("inquirer");
const { getDiffieHellman } = require("crypto");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNum){
    super (name, id, email);
    this.officeNum = officeNum;
    }
    getOffice () {
        return this.officeNum
    }

};
 

// inquirer
//     .prompt([
//     {
//         type: "input",
//         name: "officeNum", 
//         message: "What is your office number?"
//     }]);

    

