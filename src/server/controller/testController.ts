const { test } = require("../services/testService");

exports.test = (req: any, res: any) => {
  test();
  res.json({ success: true, message: "test" });
};
