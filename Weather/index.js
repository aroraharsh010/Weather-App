#!/usr/bin/env node
const log = console.log;
var input = require("minimist")(process.argv.slice(2));
// console.dir(argv);
log(input);
let city;
if (input["l"] !== undefined) {
  city = input["l"];
}
if (input["_"] == "today") {
  var fn = require("./cmd/today.js");
  fn(city);
} else if (input["_"] == "forecast") {
  var fn = require("./cmd/forecast");
  fn(city);
} else if (input["_"] == "version") {
  require("./cmd/version.js");
} else if (input["_"] == "help") {
  require("./cmd/help.js");
} else if (input["_"] == undefined) {
  log("Use help command to see a list of commands");
} else {
  log("Invalid Command");
}
