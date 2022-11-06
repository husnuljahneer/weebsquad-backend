// create an express server

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import colors from "colors/safe";
require("dotenv").config();
import { errorHandler } from "./middlewares/errorHandler";
import router from "./routes";
class App {
  public app: express.Application = express();
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeErrorHandling();
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use("/api/", router);
  }
  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }
  public listen() {
    this.app
      .listen(process.env.PORT || 3000, () => {
        console.log(
          colors.rainbow(`Server started on port ${process.env.PORT || 3000}`)
        );
      })
      .on("error", (err: string) => {
        console.log(colors.red(err));
      });
    this.app.get("*", (req, res) => {
      res.json({ success: false, errorCode: 404, message: "Invalid Route" });
    });
  }
}
export default App;
