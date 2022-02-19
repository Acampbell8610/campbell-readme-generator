// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ()=>{
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message:'What is your project name?',
            validate:nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter your project name.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'description',
            message:'How would you describe this project?',
            validate:nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter your response');
                    return false;
                }
            }
        },
         {
            type:'input',
            name: 'installation',
            message:'How do you install this project?',
            validate:nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter your response.');
                    return false;
                }
            }
        },
         {
            type:'input',
            name: 'contribution',
            message:'Please enter your contribution guidlines.',
            default:true
            
             },
              {
                type:'input',
                name: 'name',
                message:'What are the test instructions?',
                default:true
            },{
                type: 'checkbox',
                name: 'license',
                message: 'What licesens do you choose(Choose One)?',
                choices: ['MIT',]
              },
              {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub link.',
                validate: linkInput => {
                  if (linkInput) {
                    return true;
                  } else {
                    console.log('Please enter your github!');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'email',
                message: 'Enter your email.',
                validate: linkInput => {
                  if (linkInput) {
                    return true;
                  } else {
                    console.log('Please enter your email!');
                    return false;
                  }
                }
              },
              
    ])
};


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
questions()