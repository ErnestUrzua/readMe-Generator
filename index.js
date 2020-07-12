var inquirer = require("inquirer");
var fs = require("fs");

//https://gist.github.com/PurpleBooth/109311bb0361f32d87a2  good readme example
// * Title 
// * Description
// * Table of Contents//??
// * Installation //???
// * Usage ??
// * License ??
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture //uploads via github 
//   * User GitHub email
// * At least one badge
start();

function start() {
    console.log("Welcome to the \"Good\" readME generator!\n");
    promptUser();
}

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title:",
            name: "title"
        },
        {
            type: "input",
            message: "What is the description: ",
            name: "description"
        },
        {
            type: "input",
            message: "Installation instructions: ",
            name: "installation"
        },
        {
            type: "input",
            message: "Usage:",
            name: "usage"
        },
        {
            type: "list",
            message: "License:",
            name: "license",
            choices: ["MIT", "Apache", "None"]
        },
        {
            type: "input",
            message: "Contributers:",
            name: "contributer"
        },
        {
            type: "input",
            message: "tests:",
            name: "tests"
        },
        {
            type:"confirm",
            message: "Include your github picture:",
            name: "picture"
        },
        {
            message: "Enter your GitHub username:",
            name: "username"
        },
        {
            type: "confirm",
            message: "Include badges:",
            name: "badge"
        }
    ]).then(function () {
        //read what is a good readme
        // print out table of contents 
       //
        
    })

}


//array to hold questions
//const questions = [];

//array to hold ToC
const tableofContents = [];

function initalize() {
    try {
        const questions = promptUser();

        //const html = generateHTML(questions);

        //write data to file
        // writeToFile(readME.md, questions);
        // console.log(Data);

        //console.log("Successfully wrote to " + filename);
        //console.log(questions.title);
    }
    catch (err) {
        console.log(err);
    }
}

//function to write data from prompt to a file
function writeToFile(fileName, data) {
    //CODE HERE
}

// define a function that lets the user add quotes to the display list
function addTableofContents() {
    // ask the user to input the author and then the quote
    inquirer.prompt([
        {
            type: "input",
            name: "sectionName",
            message: "Enter a Table of contents section: "
        },
        {
            type: "input",
            name: "sectionContent",
            message: "Please input section content: "
        }
    ]).then(function (userInput) {
        // add the new table of content section with the corresponding content into our ToC storage
        tableofContents.push({
            sectionName: userInput.sectionName,
            sectionContent: userInput.sectionContent
        });

        //go back to prompt user
        promptUser();
    })
}



initalize();
