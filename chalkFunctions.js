const chalk = require('chalk');



module.exports.logRed = (input)=>{
  console.log(chalk.bold.red(input))
}

module.exports.logGreen = (input)=>{
  console.log(chalk.green(input))
}

module.exports.logBlue = (input)=>{
  console.log(chalk.blue(input))
}


module.exports.logOrange = (input)=>{
  console.log(chalk.keyword('orange')(input))
}