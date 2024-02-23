// Required packages for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown`);

// Questions array containing prompts for user input to generate the README
const questions = [
    // question for TITLE
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }, 
    // question for DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    // question for INSTALLATION
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    // question for USAGE
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use:'
    },
    // question for CONTRIBUTING
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    // question for TESTS
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test your project?'
    },
    // question for LICENSE
    {
        type: 'list', 
        name: 'license',
        message: 'Which license does your project use?', 
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
    },
    // question for GitHub Username (for QUESTIONS section)
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: @'
    },
    // question for email (for QUESTIONS section)
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// Function to write README file to the current directory
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README file has been generated!")
    });
}

// Main function to initialize the README generation process
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error(`Prompt couldn't be rendered in the current environment`);
        } else {
            console.error('An error occured:', error);
        }
    });
}

// Function call to initialize the application
init();