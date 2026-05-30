const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model");
// Register Route route for user registration

async function registerUserController(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const isUserAlreadYExists = await userModel.findOne({
    $or: [{ username }, { email }],
    // $or operator is used to check if either the username or email already exists in the database. If a user with the same username or email is found, it returns a 400 status code with an appropriate message.
  });

  if (isUserAlreadYExists) {
    return res.status(400).json({
      message: "Username or email already exists",
    });
  }
  // if user is not present then we will create a new user and for that  we hash the password using bcrypt and then save the user to the database. Finally, we return a success message with a 201 status code.

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });
  //user_id should actually come from the newly created user.

  //When MongoDB creates a user document, it automatically gives it an _id.
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function loginUserController(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User Login successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

// To token blacklsit
async function logoutUserController(req, res) {
  const token = req.cookies.token;
  console.log("Logout Completed");
  if (token) {
    await tokenBlacklistModel.create({ token });
  }
  res.clearCookie("token");

  res.status(200).json({
    message: "User logged out successfully",
  });
}
// get the current logged in user details
async function getMeController(req, res) {
  // req.user me user ka id aur username hoga jo ki auth middleware me set kiya gya hai
  const user = await userModel.findById(req.user.id);

  res.status(200).json({
    message: "User details fetched successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}
module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController,
};
