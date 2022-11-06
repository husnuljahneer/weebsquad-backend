const { test } = require("../services/testService");
import { NextFunction } from "express";
exports.test = (req: any, res: any, next: NextFunction) => {
  test(req, res, next);
};
