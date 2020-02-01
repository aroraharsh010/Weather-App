#!/usr/bin/env node
const log = console.log;
var input = require("minimist")(process.argv.slice(2));
// console.dir(argv);
// log(input);
const chalk = require("chalk");
let city;
if (input["l"] !== undefined || input["location"] !== undefined) {
  city = input["l"] == undefined ? input["location"] : input["l"];
}
if (input["_"] == "today") {
  var fn = require("./cmd/today.js");
  fn(city);
} else if (input["_"] == "forecast") {
  var fn = require("./cmd/forecast");
  fn(city);
} else if (input["version"] == true) {
  require("./cmd/version.js");
} else if (input["help"] == true) {
  console.log("harsh randi hai")
  require("./cmd/help.js");
} else if (input["_"] == undefined || input["_"].length == 0) {
  log(chalk.cyan("Use --help command to see a list of commands"));
} else {
  log(chalk.red("Invalid Command"));
  log(chalk.cyan("Use --help command to see a list of commands"));
}
