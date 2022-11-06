import * as express from "express";
const router = express.Router();
import main from "./main";
router.use("/", main);
export default router;
