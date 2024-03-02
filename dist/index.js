"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
require("reflect-metadata");
require("express-async-errors");
require("./shared/container");
var _routes = require("./routes");
var _CustomError = require("./shared/error/CustomError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.router);
app.use((error, request, response, next) => {
  if (error instanceof _CustomError.CustomError) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }
  return response.status(500).json({
    message: error.message
  });
});
app.listen(3333, () => {
  console.log('Runnin on the port 3333!');
});