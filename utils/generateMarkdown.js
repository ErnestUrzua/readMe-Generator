const axios = require("axios");

function generateMarkdown(data) {
  const title = data.title;
  const description = data.description;
  const installation = data.installation;
  const usage = data.usage;
  const license = data.license;
  const contributers = data.contributers;
  const tests = data.test;
  const picture = data.picture;
  const username = data.username;
  const badges = data.badges;
 


  // //get github picture and badges
  getGithubInfo(picture, username);


  return markdown = `
  # ${title}
  # Table of Contents
  - [description](##description)
  - [installation](##installation)
  - [usage](##usage)
  - [license](##license)
  - [contributors](##Contributors)
  - [tests](##Tests)
  - [picture](##Github Picture)
  - [username](##Github Username)
  - [badges](##Badges)
  ## ${description}
  
  ## ${installation}
  
  ## ${usage}
  
  ## ${license}
  
  ## ${contributers}
  
  ## ${tests}
  
  ![Github Picture]()
  
  ## ${username}
  
  ## ${badges}
  
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
      var githubPicture = result.data[0].owner.avatar_url;
      console.log(githubPicture);
      return githubPicture;
    });

  }
}


//exports the function to main index page
module.exports = generateMarkdown;
