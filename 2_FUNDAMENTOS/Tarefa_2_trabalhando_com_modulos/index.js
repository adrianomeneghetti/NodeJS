const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome? '
    },
    {
        name: 'idade',
        message: 'Qual sua idade? '
    }
]).then((answers) => {
    console.log(answers)
    
    console.log(chalk.bgYellow.black(`Meu nome é ${answers.nome} e minha idade é: ${answers.idade}`))
}).catch((err) => console.log(err))