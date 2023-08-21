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
        error ? console.log(error) : console.log("Success!");
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        // create output folder
        // https://nodejs.dev/en/learn/working-with-folders-in-nodejs/
        const folderName = 'output';
        try {
            if (!fs.existsSync(folderName)) {
              fs.mkdirSync(folderName);
            }
        } catch (err) {
            console.error(err);
        }  
        writeToFile(`./output/logo.svg`, generateSVG(response));
    });
}

init();