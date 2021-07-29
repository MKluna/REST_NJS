"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model,
    mongo = _require.mongo;

var taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
});
taskSchema.plugin(_mongoosePaginateV["default"]);

var _default = model("Task", taskSchema);

exports["default"] = _default;