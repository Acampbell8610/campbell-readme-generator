const fs = require('fs')

const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', pageTemplate(fileContent), err => {
            // if an error happens, it will send to catch
            if (err) {
                reject(err);
                
                return;
            }
            // if everything went well, resolve the promise and send the successful data to the `.then()` method
       resolve({
        ok: true,
        message: 'File Created!'
       }); 
    });
    });
};
module.exports = writeFile;
const generateLicense = license => {
    if (license == "MIT") {
      return 'MIT License -https://mit-license.org/ - A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    } else if (license == "Boost"){
    return "Boost License -https://www.boost.org/LICENSE_1_0.txt -  A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
    }  else if (license == "Mozilla") {
        return "Mozilla License -https://www.mozilla.org/en-US/MPL/2.0/ - Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses)"
    } else if (license == "Apache") {
        return "Apache License - https://www.apache.org/licenses/LICENSE-2.0.txt- A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    }else{
        return "No license listed."
    }}
    const generateBadge = license => {
        if (license == "MIT") {
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)](https://mit-license.org/)';
        } else if (license == "Boost"){
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-important.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        }  else if (license == "Mozilla") {
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-informational.svg)](https://www.mozilla.org/en-US/MPL/2.0/)"
        } else if (license == "Apache") {
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-critical.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt)"
        }else{
            return 
        }}

const pageTemplate= templateArr =>{
    return`

# ${templateArr.name}

${generateBadge(templateArr.license)}

## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Test](#Test)
6. [License](#License)
7. [ Questions. ](#Questions)


## Description:

${templateArr.description}

## Installation:

${templateArr.installation}

## Usage:

${templateArr.usage}

## Contritubing: 

${templateArr.contribution}

## Test:

${templateArr.test}

## License:

${generateLicense(templateArr.license)}


## Questions:

* https://github.com/${templateArr.github}, 
* ${templateArr.email}`
}
