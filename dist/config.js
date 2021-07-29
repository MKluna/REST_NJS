"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv").config();

var _default = {
  mongodbURL: process.env.MONGODB_URI || "mongodb://localhost/taskapi"
};
exports["default"] = _default;