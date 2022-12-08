// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            name: 'projectTitle',
            type: 'input',
            message: 'Whats the Title of your project?',
        },
        {
            name: 'description',
            type: 'input',
            message: 'Give a brief decription of your project:',
        },
        {
            name: 'instillationInstructions'
            type: 'input',
            message: 'Give the user a brief instruction on installing your application:',
        },
        {
            name: 'usageInfo',
            type: 'input',
            message: 'Write out some instructions for using your application:',
        },
        {
            name: 'contributionGuidelines',
            type: 'input',
            message: 'Give the user some guidelines for how to contribute to your app:',
        },
        {
            name: 'testingInstructions',
            type: 'input',
            message: 'Give the user instruction on Testing:',
        },
        {
            name: 'badgeInfo',
            type: '',
            message: '',
        },
        {
            name: 'github',
            type: '',
            message: '',
        },
        {
            name: 'emailAddress',
            type:  '',
            message: '',
        }
    ])

// TODO: Create a function to write README file
const generateReadme = ({projectTitle, badge, description, instillationInstructions, usageInfo, badgeInfo, contributionGuidelines, testingInstructions, github, emailAddress}) =>
`${projectTitle}

${badge}

## Description

- ${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contribution)
- [Tests](#tests)
- [Questions?](#questions)

## Installation

${instillationInstructions}

## Usage

${usageInfo}

## License

${badgeInfo}

## How to Contribute

${contributionGuidelines}

## Tests

${testingInstructions}

## Questions

${github}
${emailAddress}`

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
