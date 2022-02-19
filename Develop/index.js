// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generateReadMe= require('./src/page-template.js')
const  writeFile  = require('./utils/generate-README.js')
const fs = require('fs')
//Create an array of questions for user input
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
        },{
            type:'input',
            name:'usage',
            message:'What is this project used for?',
            default:true
        },
         {
            type:'input',
            name: 'contribution',
            message:'Please enter your contribution guidlines.',
            default:true
            
             },
              {
                type:'input',
                name: 'test',
                message:'What are the test instructions?',
                default:true
            },{
                type: 'checkbox',
                name: 'license',
                message: 'What licesens do you choose(Choose One)?',
                choices: ['MIT', 'GNU', 'Mozilla','Apache','GPLUv3', 'Public','Google']
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
    .then(projectData => {
        console.log(projectData)
       // portfolioData.projects.push(projectData);
        if (projectData) {
          
          return writeFile(projectData);
        } else {
          return ;
        }
      });
};
questions()
    // //.then (promptProject)
    // .then(projectData =>{
    //     return generateReadMe(projectData);
    // })
    // .then (projectData => {
    //     return writeFile(projectData)
    // })
    

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

