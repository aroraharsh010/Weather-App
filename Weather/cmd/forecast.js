const log = console.log;
const ora = require("ora");
const spinner = ora("Loading Weather").start();

module.exports=async function getWeather(name) {
  var weather = await require("./../utils/weather.js");
  var data = await weather(name);
  spinner.stop();
  log("Forecast for " + data[0] + " is:");
  for (var i = 0; i < data[1]["consolidated_weather"].length; i++) {
    var res = data[1]["consolidated_weather"][i];
    log(
      res["applicable_date"] +
        " - Low:" +
        Math.floor(res["min_temp"]) +
        "° | High: " +
        Math.ceil(res["max_temp"]) +
        "° | " +
        res["weather_state_name"]
    );
  }
}
