// Function to return a license badge based on the user's selection
function renderLicenseBadge(license){
  // Mapping of license names to badge images
  const badgeLinks = {
    // Define badge links for each license
    'MIT': 'https://img.shields.io/badge/License-MIT-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
  };
  return license !== 'None' ? `![License](${badgeLinks[license]})` : ''; // If there is no license, return an empty string
}

// Function to return a license link for further information
function renderLicenseLink(license) {
  // Mapping of license names to their respective URLs
  const licenseLinks = {
    // Define URLs for each license
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return license !== 'None' ? `[License](${licenseLinks[license]})` : ''; // If there is no license, return an empty string
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  // Use the other functions to get the badge and link
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  const licenseText = {
    // Define the text for each license
    'MIT': 'This project is licensed under the MIT License.',
    'Apache 2.0': 'This project is licensed under the Apache 2.0 license.',
    'GPLv3': 'This project is licensed under the GNU GPLv3 license.',
    'BSD 3-Clause': 'This project is licensed under the BSD 3-Clause license.'
  };

  // Check if a license has been chosen and return the formatted section
  if (license !== 'None') {
    return `## License\n${badge}\n\n${licenseText[license]}\n\nFor more information about the license, please visit ${link}.`;
  }

  return ''; // If there is no license, return an empty string
}

// Main function to generate markdown text for README
function generateMarkdown(data) {
  // Dynamically construct the README content
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For any questions, please contact me with the information below.\n
  GitHub: [${data.github}](https://github.com/${data.github})\n
  Email: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;