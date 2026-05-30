const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const authRouter = Router();

// Register Route route for user registration
// Description: This route allows users to register by providing their username, email, and password. It validates the input and creates a new user in the database if the registration is successful.
authRouter.post("/register", authController.registerUserController);

// POST Api /api/login
authRouter.post("/login", authController.loginUserController);

authRouter.post("/logout", authController.logoutUserController);

// Jo bhi user get -me api pr hit kr rha hoga uska details database se fetch krkr usko return krna hoga

authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);
module.exports = authRouter;
