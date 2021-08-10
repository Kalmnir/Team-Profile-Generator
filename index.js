const generateHTML = require('./src/GenerateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const { validate } = require('@babel/types');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the manager for this team?',
            name: 'name',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter the manager's ID number.",
            name: 'id',
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please input the manger's ID number!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "Please input the manager's email adress.",
            name: 'email',
            validate: userInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email adress!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please input the manager's office number.",
            name: 'officeNumber',
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log('Please input a valid office number!')
                    return false;
                } else {
                    return true
                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
        })
};

const addEmployee = () => {
    console.log(`
    ==============================
    Adding employees to your team!
    ==============================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            message: "Please select your team members role.",
            choices: ['Engineer', 'Intern'],
            name: 'role',
        },
        {
            type: 'input',
            message: "What is your team member's name?",
            name: 'name',
            validate: userInput => {
                if (userInput) {
                    return true
                } else {
                    console.log("Please input your team member's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your team member's employee ID number?",
            name: 'id',
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please input your team member's employee ID number!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "What is your team member's email adress?",
            name: 'email',
            validate: userInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please input a valid email adress!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            when: (input) => input.role === 'Engineer',
            message: "What is your engineer's github username?",
            name: 'github',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please input your engineer's github username!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            when: (input) => input.role === 'Intern',
            message: "What is the name of your intern's school?",
            name: 'school',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please input the name of your intern's school!")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            message: 'Would you like to add any more team members?',
            name: 'confirmTeamMembers',
            default: false
        }
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmTeamMembers } = employeeData;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
            }

            teamArray.push(employee);

            if (confirmTeamMembers) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
};