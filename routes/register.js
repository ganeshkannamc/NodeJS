const express = require("express");
const router = express.Router();

let { register } = require("../controller/registercontroller");

router.route("/").post(register);

module.exports = router;
