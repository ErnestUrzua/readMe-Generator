var inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



//https://gist.github.com/PurpleBooth/109311bb0361f32d87a2  good readme example

start();

async function start() {
    console.log("Welcome to the \"Good\" readME generator!\n");
    var answers = await promptUser();
    console.log(answers);//works
        console.log(answers.username);//works
        //read what is a good readme
        generateMarkdown(answers);

    await writeToFile("GoodREADME.md", generateMarkdown);
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
            type: "confirm",
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
    ])

}


//function to write data from prompt to a file
function writeToFile(fileName, data) {
    //CODE HERE
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            throw err;
        }
        console.log("here is the "+ data);
        console.log("Successfully wrote to " + fileName + " to  file");
    });


    //append title to Md file
    //append description
    //installation
    //usage
    //append license to document
    // contributers
    // tests
    // github picture
    //github username
    //badges
}



