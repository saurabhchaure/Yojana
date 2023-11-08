const express = require("express");
const server = express();
const setting = require("./SETTING.json");

const PORT = process.env.PORT || 8080;

server.get("/setting(.json)?", (req, res) => {
  res.send(setting);
});

server.listen(PORT);
