const axios = require("axios");
var githubPicture;
var license;
var bashBadge = "[![Bash Shell](https://badges.frapsoft.com/bash/v1/bash.png?v=103)](https://github.com/ellerbrock/open-source-badges/)";


function generateMarkdown(data) {
  const title = data.title;
  const description = data.description;
  const installation = data.installation;
  const usage = data.usage;
  const licenseType = data.license;
  const contributers = data.contributer;
  const tests = data.tests;
  const picture = data.picture; //boolean
  const username = data.username;
  const badges = data.badge; //boolean


  // //get github picture and badges
  getGithubInfo(picture, username);

  //check what license type to display
  includeLicense(licenseType);

  //if they want badges append to file
  if (badges === true){
    //append to md file
  }

  return markdown = `
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  # ${title}
  ## Table of Contents
  - [description](##Description)
  - [installation](##installation)
  - [usage](##usage)
  - [license](##license)
  - [contributors](##Contributors)
  - [tests](##Tests)
  - [picture](##Github Picture)
  - [username](##Github Username)
  - [badges](##Badges)

  ## Description: ${description}
  
  ## Installation: ${installation}
  
  ## Usage: ${usage}
  
  ## License type: ${licenseType}
  ![Github license](##${license})
  
  ## Contributers: ${contributers}
  
  ## Tests: ${tests}
  
  ## Github Picture:
  ![Github Picture](##${githubPicture})
  
  ## Github username:  ${username}
  
  ## Badges ${badges}
  
  `;


}

//gets the github avatar based off username
function getGithubInfo(picture, username) {
  console.log(picture);//check what picture is, undefined
  //check it picture is true, add if undefined later
  if (picture === true) {

    // https://api.github.com/users/ernesturzua/repos?per_page=100
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    //get github user avatar picture
    axios.get(queryUrl).then(function (result) {
      //console.log(result.data[0].owner.avatar_url);//works
      githubPicture = result.data[0].owner.avatar_url;
      console.log(githubPicture);
      return githubPicture;
    });

  }
}

//checks what license to display
function includeLicense(license) {
  if (license === "Apache") {
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "MIT") {
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  return license;
}


//exports the function to main index page
module.exports = generateMarkdown;
