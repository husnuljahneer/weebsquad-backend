import type { ErrorRequestHandler, NextFunction } from "express";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: any,
  res: any,
  next: NextFunction
) => {
  console.error(err);
  res.status(500).send("Something went wrong");
};
