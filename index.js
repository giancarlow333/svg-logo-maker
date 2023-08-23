// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./utils/generateSVG.js");

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter logo text (<= 3 chars):',
        name: 'logoText',
    },
    {
        type: 'input',
        message: 'Please enter text color (hex or keyword):',
        name: 'logoTextColor',
    },
    {
      type: 'list',
      message: 'What shape do you want?',
      name: 'logoShape',
      choices: ["circle", "triangle", "square"]
    },
    {
        type: 'input',
        message: 'Please enter logo color (hex or keyword):',
        name: 'logoColor',
    },
];

// Function to write SVG file
function writeToFile(fileName, svg) {
    fs.writeFile(fileName, svg, function(error) {
        error ? console.log(error) : console.log("Generated logo.svg!");
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        // create output folder
        const folderName = 'output';
        try {
            if (!fs.existsSync(folderName)) {
              fs.mkdirSync(folderName);
            }
        } catch (err) {
            console.error(err);
        }
        // validate the text
        if (response.logoText.length > 3) {
            throw new Error("Logo link must be three characters or less");
        }
        writeToFile(`./output/logo.svg`, generateSVG(response));
    });
}

init();