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