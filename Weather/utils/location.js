const axios = require("axios");
const log = console.log;
const link = "http://ip-api.com/json";

module.exports = async function getLocation(name) {
  if (name !== undefined) {
    return name;
  }
  let city = "";
  try {
    const response = await axios.get(link);
    // log(response["data"]["city"]);
    city = response["data"]["city"];
  } catch (error) {
    console.error(error);
  } finally {
    return city;
  }
};
