// create an express server

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import colors from "colors/safe";

require("dotenv").config();

// import { logger } from "./middleware/logger";
// import { errorHandler } from "./middleware/errorHandler";
// import { notFound } from "./middleware/notFound";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(colors.rainbow(`Server running on port ${port}`));
});
