// TODO: Include packages needed for this application
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// TODO: Create an array of sections for user input
(`
=================
Create ReadMe
=================
`);
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'Provide a title for your project. (Required)',
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Provide installation instructions for your project. (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('You need to enter project installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for your project. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to enter project usage instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions for contributing to this project. (Required)',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('You need to enter project contribution instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide testing instructions for this project. (Required)',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('You need to enter project testing instructions!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose and open source license.',
        choices: ['community-preferred', 'MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License', 'Apache License 2.0', 'Boost Software License 1.0', 'the Unilicense']
      },
// TODO: Create an array of questions for user input
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      }
    ])
    then(data => {
      return data;
    })
}

// TODO: Create a function to write README file
promptUser()
.then(data => {
  generatePage(data)
})
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
