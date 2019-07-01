const log = console.log;
const chalk = require("chalk");

log(chalk.cyan("Commands"));
log(chalk.cyan("1. today: Get today's forecast"));
log(
  chalk.cyan("2.. -l location: To set location other than you current location")
);
log(chalk.cyan("3. forecast: Get forecast for next couple days"));
log(chalk.cyan("4. --version: Get package version"));
