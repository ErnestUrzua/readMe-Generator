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

  return `
# ${title}
# Table of Contents
- [description](##description)
- [installation](##installation)
- [usage](##usage)
- [license](##license)
## ${description}

## ${installation}

## ${usage}

## ${license}

## ${contributers}

## ${tests}

## ${picture}

## ${username}

## ${badges}

`;
}