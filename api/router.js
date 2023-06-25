const express = require("express");
const route = express();

const system = require("./system/router");
const router = require("./custom/router");

route.use("/system", system);
route.use("/custom", router);

module.exports = route;
