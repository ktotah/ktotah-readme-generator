// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  const badgeLinks = {
    'MIT': 'https://img.shields.io/badge/License-MIT-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
  };
  return license !== 'None' ? `![License](${badgeLinks[license]})` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return license !== 'None' ? `* [License](#license)` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseText = {
    'MIT': 'This project is licensed under the MIT License.',
    'Apache 2.0': 'This project is licensed under the Apache 2.0 license.',
    'GPLv3': 'This project is licensed under the GNU GPLv3 license.',
    'BSD 3-Clause': 'This project is licensed under the BSD 3-Clause license.'
  };
  return license !== 'None' ? `## Licnese\n\n${licenseText[license]}\n` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  ${data.credits}

 ${renderLicenseSection(data.license)}

 ## Questions
 For any questions, please contact me with the information below.
 GitHub: [${data.github}](https://github.com/${data.github})
 Email: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;
