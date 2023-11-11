const axios = require("axios");

axios.get("http://localhost:8080/setting.json").then((res) => {
  console.log(res.data);
});
