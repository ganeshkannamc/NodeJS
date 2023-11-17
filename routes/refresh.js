const express = require("express");
const router = express.Router();

let handleRefreshToken = require("../controller/refreshTokenController");

router.route("/").get(handleRefreshToken);


module.exports = router;
