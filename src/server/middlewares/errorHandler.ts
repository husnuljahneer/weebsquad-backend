import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler<ErrorRequestHandler> = (
  err: any,
  req: any,
  res: any,
  next: any
) => {
  console.error(err);
  res.status(500).send("Something went wrong!");
};

export { errorHandler };
