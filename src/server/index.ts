// create an express server

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import colors from "colors/safe";
require("dotenv").config();

import { errorHandler } from "./middlewares/errorHandler";
class App {
  public app: express.Application = express();
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  public listen() {
    this.app.listen(process.env.PORT || 3000, () => {
      console.log(
        colors.rainbow(`Server started on port ${process.env.PORT || 3000}`)
      );
    });
  }
}

export default App;
