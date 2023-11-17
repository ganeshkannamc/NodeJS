const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  console.log(req.headers);
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  console.log(token);

  jwt.verify(token, "ksdva;lvbagoi;sbrnvna:OWB", (err, decoded) => {
    if (err) {
      console.log(err);
      return res.sendStatus(401);
    }
    console.log(decoded);
    next();
  });
};

module.exports = verifyJWT;
