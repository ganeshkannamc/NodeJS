const jwt = require("jsonwebtoken");
let userList = require("../config/userList");

function checkIfValidUser(req, res) {
  let { username, password } = req.body;
  // Check if provided username and password matches with the record
  let checkIfValid = userList.find(
    (user) => user?.username == username && user?.password == password
  );
  // If valid allow login else throw unauthorized
  if (checkIfValid) {
    const payload = {
      userName: "ganesh",
      role: "admin",
    };
    const secretKey = "ksdva;lvbagoi;sbrnvna:OWB";
    const accessToken = jwt.sign(payload, secretKey, { expiresIn: "600s" });
    const refreshToken = jwt.sign(payload, secretKey, { expiresIn: "1d" });
    // Send refreshToken securly by creating secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200);
    return res.json({ accessToken: accessToken });
  } else {
    res.status(401);
    return res.json({ message: "Check your credentials!" });
  }
}

function getMethod(req, res) {
  return res.json({ message: "This is login get method" });
}

function getSubDomin(req, res) {
  return res.json({ message: "This is login get method with sub endpoint" });
}

module.exports = { checkIfValidUser, getMethod, getSubDomin };
