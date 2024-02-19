// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
    // question for TITLE
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }, 
    // question for DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    // Add more questions here
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err; 
        console.log('README.md has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        if (err.isTtyError) {
            console.error(`Prompt couldn't be rendered in the current environment`);
        } else {
            console.error('An error occured:', error);
        }
    });
}

// Function call to initialize app
init();
