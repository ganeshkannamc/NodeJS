let userList = require("../config/userList");

const register = (req, res) => {
  // parse req.body
  // console.log(req.body)
  console.log(req.check);

  let { username, password } = req.body;
  // 1 - If user already registered
  let checkIfRegistered = userList.find((user) => user?.username == username);
  // 2 - If already registered then i will say already registered else create a new user.
  if (checkIfRegistered) {
    res.status(200);
    return res.json({ message: "User already registered" });
  } else {
    userList = [...userList, { username: username, password: password }];
    res.status(200);
    return res.json({ message: `Success ${username}! Registered` });
  }
};

module.exports = { register };
