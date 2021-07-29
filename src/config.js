require("dotenv").config();

export default {
  mongodbURL: process.env.MONGODB_URI || "mongodb://localhost/taskapi",
};
