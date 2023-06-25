const express = require("express");
const route = express();
const path = require("path");

const routes = require("./routes.json");

for (let routeCustom of routes) {
  switch (routeCustom.method) {
    case "get":
      route.get(
        routeCustom.api,
        require(path.join(
          __dirname,
          "controllers",
          routeCustom.controller + ".js"
        ))
      );
      break;
    case "post":
      route.post(
        routeCustom.api,
        require(path.join(
          __dirname,
          "controllers",
          routeCustom.controller + ".js"
        ))
      );
      break;
    case "put":
      route.put(
        routeCustom.api,
        require(path.join(
          __dirname,
          "controllers",
          routeCustom.controller + ".js"
        ))
      );
      break;
    case "delete":
      route.delete(
        routeCustom.api,
        require(path.join(
          __dirname,
          "controllers",
          routeCustom.controller + ".js"
        ))
      );
      break;
    default:
      route.get(
        routeCustom.api,
        require(path.join(
          __dirname,
          "controllers",
          routeCustom.controller + ".js"
        ))
      );
      break;
  }
}

module.exports = route;
