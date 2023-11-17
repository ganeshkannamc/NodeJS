const jwt = require("jsonwebtoken");

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  jwt.verify(refreshToken, "sdva;lvbagoi;sbrnvna:OWB", (err, decoded) => {
    if (err) {
      console.log(err);
      return res.sendStatus(401);
    }
    const payload = {
      userName: "ganesh",
      role: "admin",
    };
    const secretKey = "ksdva;lvbagoi;sbrnvna:OWB";
    const accessToken = jwt.sign(payload, secretKey, { expiresIn: "60s" });
    res.status(200);
    return res.json({ accessToken: accessToken });
  });
};

module.exports = handleRefreshToken;
