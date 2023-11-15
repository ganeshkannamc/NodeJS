const express = require("express");
const router = express.Router();

let {
  checkIfValidUser,
  getMethod,
  getSubDomin,
} = require("../controller/authController");

router.route("/").post(checkIfValidUser).get(getMethod);

router.route("/user").get(getSubDomin);

module.exports = router;
