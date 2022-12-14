var fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `[![License: ${license}](https://imgshields.io/badge/License-${license}.svg)](${renderLicenseLink(license)})`
    } else {
        return ``;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return 'https://opensource.org/licenses/MIT';
    }
    if (license === "Apache") {
        return 'https://opensource.org/licenses/Apache-2.0';
    }
    if (license === 'Mozilla Public License') {
        return 'https://opensource.org/licenses/MPL-2.0';
    }
    if (license === 'GPl') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    }
    if (license === 'LGPL') {
        return 'https://www.gnu.org/licenses/lgpl-3.0';
    }
    else {
        return ``;
    }
}

module.exports = renderLicenseBadge;


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }