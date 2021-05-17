// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const { userInfo } = require("os");
const utility = require ()

// TODO: Create an array of questions for user input
const questions = [
//project title
    {
        type: 'input',
        name: 'projectTitle', 
        message: 'Enter the project name.',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
  //project description
    {
        type: 'input',
        name: 'description', 
        message: 'Enter the project description.',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    //project installation instructions
    {
        type: 'input',
        name: 'installation', 
        message: 'Enter the instructions for installation.',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    //project usage
    {
        type: 'input',
        name: 'usage', 
        message: 'How is this project intended to be used?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    //project licensing
    {
        type: 'list',
        name: 'license', 
        message: 'What license are you using for the project?',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License'],
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    //project contributors
    {
        type: 'input',
        name: 'contributors', 
        message: 'Who is contributing to this project?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    //project usage
    {
        type: 'input',
        name: 'usage', 
        message: 'How is this project intended to be used?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    }, 
        //project usage
    {
        type: 'input',
        name: 'usage', 
        message: 'How is this project intended to be used?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    // project testing
    {
        type: 'input',
        name: 'tests', 
        message: 'Did you write tests for the project?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    //project Github username
    {
        type: 'input',
        name: 'username', 
        message: 'What is your GitHub username?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    // prompt for email
    {
        type: 'input',
        name: 'email', 
        message: 'What is your email address?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    },
    {
        type: 'input',
        name: 'username', 
        message: 'What is your GitHub username?',
        //validate answer
        validate: function (answer) {
            if (answer.length < 1) {
                return "You should make an entry.";
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return;
        }
        console.log("Your markdown file has been created.")
    });
}

// TODO: Create a function to initialize app
function init() {
    try {
        const userResponses = inquirer.prompt(questions);
        const markdown = generateMarkdown (userResponses, userInfo);
        writeToFile('projectREADME.md', markdown);
        }   
        catch (error) {
            console.log(error);
        }
};

// Function call to initialize app
init();
