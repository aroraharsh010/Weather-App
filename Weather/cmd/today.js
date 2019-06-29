const log = console.log;
const ora = require("ora");
module.exports = async function getWeather(name) {
  const spinner = ora("Loading Weather").start();
  var weather = await require("./../utils/weather.js");
  var data = await weather(name);
  spinner.stop();
  log("Current conditions in " + data[0] + " are");
  log(
    "\t" +
      Math.ceil(data[1]["consolidated_weather"][0]["the_temp"]) +
      "°C " +
      data[1]["consolidated_weather"][0]["weather_state_name"]
  );
};
