import { NextFunction } from "express";
exports.test = (req: any, res: any, next: NextFunction) => {
  console.log("test fuction is being called now");
  res.json({ success: true, message: "test function is being called now" });
};
