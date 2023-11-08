const axios = require("axios");

export const setting = async () => {
  const res = await axios.getAdapter("http://localhost:8080/setting.json");
  return res;
};
