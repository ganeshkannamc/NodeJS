const path = require("path");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const { logger } = require("./middleware/logEvents");
const { corsOptions } = require("./config/corsOptions");

const app = express();

const PORT = 5000;

// Middleware - The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
app.use(express.json());
// Custom middleware
app.use(logger);

// CORS - Restricts client consumming our API. We can assgin clients who can access our API
app.use(cors());

// bcrypt
// bcrypt.hash("gaensh", 5, function (err, encry) {
//   if (err) return console.log("Error while password hash", err);
//   console.log(encry);
//   // bcrypt.compare("gaensh", hash, function (err, result) {
//   //   if (err) return console.log("Error while password compare", err);
//   //   console.log(result);
//   //   // result == false
//   // });
// });

// bcrypt.hash("gaensh", 5, function (err, hash) {
//   if (err) return console.log("Error while password hash", err);
//   console.log(hash);
//   bcrypt.compare("gaensh", hash, function (err, result) {
//     if (err) return console.log("Error while password compare", err);
//     console.log(result);
//     // result == false
//   });
// });

// bcrypt.hash("gaensh", 5, function (err, hash) {
//   if (err) return console.log("Error while password hash", err);
//   console.log(hash);
//   bcrypt.compare("gaensh", hash, function (err, result) {
//     if (err) return console.log("Error while password compare", err);
//     console.log(result);
//     // result == false
//   });
// });

// bcrypt.hash("gaensh", 5, function (err, hash) {
//   if (err) return console.log("Error while password hash", err);
//   console.log(hash);
//   bcrypt.compare("Gaensh", hash, function (err, result) {
//     if (err) return console.log("Error while password compare", err);
//     console.log(result);
//     // result == false
//   });
// });

// API routes
app.get("/", (req, res) => {
  res.status(200);
  return res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/auth"));

app.use("/users", require("./routes/api/user"));

app.all("*", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// app.use(cors(corsOptions));
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Am printing from custom middleware", req.method);
//   req.check = { message: "The request is clean and validated" };
//   // return res.json({ message: "Am from middle ware" });
//   let isSanitized = true;
//   if (isSanitized) {
//     next();
//   } else {
//     return res.json({ Message: "This is not a human" });
//   }
// });

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

// http://localhost:5000/login
// {
//   "username":"ganesh",
//   "password":"12344"
// }
