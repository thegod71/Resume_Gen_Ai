const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  const token = req.cookies.token;
  // step 1: check if token is provided or not
  if (!token) {
    return res.status(401).json({
      message: "Token is provided",
    });
  }
  // step 2  : verify the token  that is it is in blacklist or not
  const isTokenBlacklisted = await tokenBlacklistModel.findone({ token });
  if (isTokenBlacklisted) {
    return res.status(401).json({
      message: "Token is blacklisted",
    });
  }
  // step3: verify the token // kui ki verify jb invalid aata hai to wo error throw krta hai to usko handle krna hoga
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // decoded me user ka id aur username hoga
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = { authUser };
