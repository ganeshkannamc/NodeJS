const path = require("path");
const express = require("express");

const app = express();

const PORT = 5000;

let userList = [];

// Middleware - The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
  console.log("Am printing from custom middleware", req.method);
  req.check = { message: "The request is clean and validated" };
  // return res.json({ message: "Am from middle ware" });
  let isSanitized = true;
  if (isSanitized) {
    next();
  } else {
    return res.json({ Message: "This is not a human" });
  }
});

// API routes
app.get("/", (req, res) => {
  res.status(200);
  return res.sendFile(path.join(__dirname, "views", "index.html"));
});

// app.use((req, res, next) => {
//   console.log("Am printing from custom middleware", req.method);
//   req.check = { message: "The request is clean and validated" };
//   // return res.json({ message: "Am from middle ware" });
//   let isSanitized = false;
//   if (isSanitized) {
//     next();
//   } else {
//     return res.json({ Message: "This is not a human" });
//   }
// });

// http://localhost:5000/register
// {
//   "username":"ganesh",
//   "password":"12344"
// }
app.post("/register", (req, res) => {
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
});

// http://localhost:5000/login
// {
//   "username":"ganesh",
//   "password":"12344"
// }
app.post("/login", (req, res) => {
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
});

app.all("*", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
