const express = require("express");
const route = express();

const controller = require("./controller");

route.get("/", controller.getInfo);
route.post("/api", controller.newApi);

module.exports = route;
