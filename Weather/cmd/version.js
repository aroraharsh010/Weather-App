const chalk = require("chalk");
var jsonFile = require("./../package.json");
console.log(chalk.magenta("v" + jsonFile["version"]));
