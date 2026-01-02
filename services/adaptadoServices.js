 const axios = require("axios");

const REGISTER_URL =
  "https://api.adaptado.io/api/users/authentication/register";

const LOGIN_URL =
  "https://api.adaptado.io/api/users/authentication/login";
 

exports.registerService = async ({ loginID, loginPwd }) => {
  if (!loginID || !loginPwd) {
    throw new Error("Email and password are required");
  }

  const response = await axios.post(REGISTER_URL, {
    loginID,
    loginPwd,
  });

  return response.data;
};

 
exports.loginService = async ({ loginID, customerPass }) => {
  if (!loginID || !customerPass) {
    throw new Error("Email and password are required");
  }

  const response = await axios.post(LOGIN_URL, {
    loginID,
    customerPass,
  });

  return response.data;
};

