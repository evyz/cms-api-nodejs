const express = require("express");
const app = express();

const api = require("./api/router");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api", api);

const start = async () => {
  app.listen(4000, () => {
    console.log("server started on 4000");
  });
};

start();
