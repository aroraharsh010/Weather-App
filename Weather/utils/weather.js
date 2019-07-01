const log = console.log;
const axios = require("axios");

module.exports = async function getCurrentCity(name) {
  if (name !== undefined) {
    return await getWeatherId(await name);
  } else {
    var location = require("./location.js");
    const city = location();
    return await getWeatherId(await city);
  }
};
// getCurrentCity();
async function getWeatherId(city) {
  var link = "https://www.metaweather.com/api/location/search/?query=";
  link += city;
  let woeid;
  try {
    const res = await axios.get(link);
    woeid = res["data"][0]["woeid"];
    // log(woeid);
    var weatherResp = await axios.get(
      "https://www.metaweather.com/api/location/" + woeid
    );
    return [city, weatherResp["data"]];
    // log(weatherResp["data"]);
  } catch (error) {
    log(error);
    spinner.stop();
  }
}
