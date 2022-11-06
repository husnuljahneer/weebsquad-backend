import * as express from "express";
const router = express.Router();
import main from "./main";
const { test } = require("../controller/testController");

router.use("/", main);
router.use("/test", test);

export default router;
