import { getLocalStorage, TokenValidation } from "utils";

const apiVersion = "";
const url = "";
const baseUrl = url + apiVersion;

const accessToken = getLocalStorage("userInfo").loginToken;

TokenValidation(accessToken);


export default function Config() {
  const config = {
    base_url: baseUrl,
    token: accessToken,
  };
  return config;
}
