const log = console.log;
const ora = require("ora");
const chalk = require("chalk");
module.exports = async function getWeather(name) {
  const spinner = ora(chalk.cyan("Loading Weather")).start();
  var weather = await require("./../utils/weather.js");
  try {
    var data = await weather(name);
    spinner.stop();
    log(chalk.green("Current conditions in " + data[0] + " are-"));
    log(
      chalk.magenta(
        "\t" +
          Math.ceil(data[1]["consolidated_weather"][0]["the_temp"]) +
          "°C " +
          data[1]["consolidated_weather"][0]["weather_state_name"]
      )
    );
  } catch (error) {
    spinner.stop();
    log(chalk.red("Error! Please try again"));
  }
};
