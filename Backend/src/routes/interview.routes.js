const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const interviewController = require("../controllers/interview.controller");
const upload = require("../middlewares/file.middleware");

const interviewRouter = express.Router();
// In this the interview Report is generated with the help of self decsription,resume pdf and job description and because for private access we usr auth middleware
interviewRouter.post(
  "/",
  authMiddleware.authUser,
  upload.single("resume"),
  interviewController.generateInterViewReportController,
);
// to get interview report By InterviewIs
interviewRouter.get(
  "/report/:interviewId",
  authMiddleware.authUser,
  interviewController.getInterviewReportByIdController,
);

// to get all report of specfic user
interviewRouter.get(
  "/",
  authMiddleware.authUser,
  interviewController.getAllInterviewReportsController,
);
module.exports = interviewRouter;
