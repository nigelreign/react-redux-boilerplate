/** @constant
    @type {object}
    @default
*/

const getAccessToken = () => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo !== null) {
    const loginToken = JSON.parse(userInfo).loginToken;
    return loginToken;
  }
  return false;
};

const access_token = getAccessToken();

const apiKey = "";
const apiUsername = "";
const url = "";
const tumai_url = "";
const tumai = "";
const ip_address = "";
const port = "";
const googleID =
  "";
const facebookID = "";

const config = {
  production: {
    api: {
      tumai: tumai,
      ip_address: ip_address,
      googleID: googleID,
      facebookID: facebookID,
      base_url: ip_address + port + tumai_url,
      tumai_url: url,
      token: access_token,
      apiKey: apiKey,
      apiUsername: apiUsername,
    },
  },
  local: {
    api: {
      tumai: tumai,
      ip_address: ip_address,
      googleID: googleID,
      facebookID: facebookID,
      base_url: ip_address + port + tumai_url,
      tumai_url: url,
      token: access_token,
      apiKey: apiKey,
      apiUsername: apiUsername,
    },
  },
  development: {
    api: {
      tumai: tumai,
      ip_address: ip_address,
      googleID: googleID,
      facebookID: facebookID,
      base_url: ip_address + port + tumai_url,
      tumai_url: url,
      token: access_token,
      apiKey: apiKey,
      apiUsername: apiUsername,
    },
  },
  staging: {
    api: {
      tumai: tumai,
      ip_address: ip_address,
      googleID: googleID,
      facebookID: facebookID,
      base_url: ip_address + port + tumai_url,
      tumai_url: url,
      token: access_token,
      apiKey: apiKey,
      apiUsername: apiUsername,
    },
  },
};

/**
 * Get env based configuration
 * @constructor
 * @returns {configuration}
 */
export default function getConfig() {
  const environment = process.env.NODE_ENV;

  if (["production", "development", "staging", "local"].includes(environment)) {
    const configuration = config[environment];
    return configuration;
  }
  throw new Error(`invalid value for NODE_ENV: ${environment}`);
}
