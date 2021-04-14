const inquirer = require("inquirer")
const Intern = require("./lib/Intern")


function newEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "employee",
            message: "What is the New Employee's Name?"
        },

        {
            type: "input",
            name: "id",
            message: "What is the New Employee's ID number?"
        },

        {
            type: "input",
            name: "emailaddress",
            message: "What is the employee's Email address?"
        },

        {
            type: "list",
            name: "roletype",
            message: "What is the Employee's Position?",
            choices: ["manager", "intern", "engineer"],
        }
    ]).then((answers) => {
        console.log(answers)
        switch (answers.roletype) {
            case "intern":
                inquirer.prompt({
                    type: "input",
                    name: "school",
                    message: "What school did employee go to?"
                }).then(response => {
                    const intern = new Intern(answers.employee, answers.id, answers.emailaddress, response.school)
                    console.log(intern)
                })
                break;
            case "engineer":
                inquirer.prompt({
                    type: "input",
                    name: "github",
                    message: "What is the employee's github user name?"
                }).then(response => {
                    //create engineer

                })
                break;
            case "manager":
                inquirer.prompt({
                    type: "input",
                    name: "officenumber",
                    message: "What is employee's manager's office number?"
                }).then(response => {
                    //create manager

                })
                break;

            default:
                break;
        }
    })
}

newEmployee()