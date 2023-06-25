const fs = require("fs");
const sysPath = require("path");
const routes = require("../custom/routes.json");

class SystemController {
  async getInfo(req, res, next) {
    let { page, size } = req.query;

    size = size ? size : 20;
    page = page > 1 ? page : page - 1;

    return res.json(routes.slice(page * size, size));
  }
  async newApi(req, res, next) {
    let { path, method, controller, callback } = req.body;

    method = method || "get";

    let defaultPathFile = sysPath.join(__dirname, "../custom/controllers");

    fs.writeFileSync(
      sysPath.join(defaultPathFile, controller + ".js"),
      "module.exports = (req,res,next) => { \n" + callback + "\n }"
    );

    routes.push({ api: path, method, controller });
    let updParsed = JSON.stringify(routes);
    fs.writeFileSync(
      sysPath.resolve(__dirname, "..", "custom", "routes.json"),
      updParsed
    );

    return res.json({ api: path, method, controller });
  }
}

module.exports = new SystemController();
