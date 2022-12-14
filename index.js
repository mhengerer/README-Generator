// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const renderLicenseBadge = require('./utils/generateMarkdown');

const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
            name: 'instillationInstructions',
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
            name: 'license',
            type: 'list',
            message: 'What licence are you using for this project?',
            choices: ['MIT', 'Apache', 'MPL 2.0', 'GPL', 'LGPL']
        },
        {
            name: 'github',
            type: 'input',
            message: 'Submit your Github Profile URL:',
        },
        {
            name: 'emailAddress',
            type:  'input',
            message: 'Submit your email address:',
        },
    ]);
};


// TODO: Create a function to write README file
const generateReadme = ({projectTitle, description, instillationInstructions, usageInfo, license, contributionGuidelines, testingInstructions, github, emailAddress}) =>
`
${projectTitle}

${renderLicenseBadge(license)}

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

${license}

## How to Contribute

${contributionGuidelines}

## Tests

${testingInstructions}

## Questions

${github}
${emailAddress}`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile('README1.md', generateReadme(answers)))
    .then(() => console.log('successfully created README1.md file'))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
