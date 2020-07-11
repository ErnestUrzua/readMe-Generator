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
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title?",
            name: "Title"
        },
        {
            type: "input",
            message: "What is the description? ",
            name: "Description"
        },
        {
            type: "input",
            message: "Add a table of contents ",
            name: "Table of contents"
        },
        {
            type: "input",
            message: "Installation instructions ",
            name: "Installation"
        },
        {
            type: "input",
            message: "Usage?",
            name: "Installation"
        }
    ])
    .then(function (response) {
        console.log(response)

        //array to hold questions
        const questions = [];
    });



function writeToFile(fileName, data) {
}

function init() {

}

init();
