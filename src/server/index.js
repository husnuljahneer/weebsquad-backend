const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const color = require("colors");

class Server {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(__dirname, "../client/build")));
    this.app.use(
      session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
      })
    );
  }

  start() {
    this.app.listen(3000, () => {
      console.log("Server started on port 3000".rainbow);
    });
  }
}

module.exports = Server;
