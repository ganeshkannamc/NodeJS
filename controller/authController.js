let userList = require("../config/userList");

function checkIfValidUser(req, res) {
  let { username, password } = req.body;
  // Check if provided username and password matches with the record
  let checkIfValid = userList.find(
    (user) => user?.username == username && user?.password == password
  );
  // If valid allow login else throw unauthorized
  if (checkIfValid) {
    res.status(200);
    return res.json(userList);
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
