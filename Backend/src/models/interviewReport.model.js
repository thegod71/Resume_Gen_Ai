const mongoose = require("mongoose");

/**
 *
 *- Job Description Schema
 * -resume text
 * -self description
 *
 *
 * -matchscore:Number
 *
 * -Technical questiona :[
 *        {
 *         question: "",
 *          intertion :"",
 *           answer: ""
 *         }
 * ]
 * -Behavioral questiona :[
 *                {
 *         question: "",
 *          intertion :"",
 *           answer: ""
 *         }
 * ]
 * -Skill gap :[{
 *          skill:"",
 *          severity:{
 *          tyoe:String,
 *          enum:["low","medium","high"]
 * }
 * }]
 * -preparation plan:[{
 * day:Number,
 * focus:Sting,
 * tasks:[String]
 * }]
 * -Latex code which will generate the resume
 */
const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },
    intentions: {
      type: String,
      required: [true, "Intentions are required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  { _id: false },
);
const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },
    intentions: {
      type: String,
      required: [true, "Intentions are required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  { _id: false },
);
const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is required"],
    },
  },
  { _id: false },
);

const preparationPlanSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: [true, "Day is required"],
  },
  focus: {
    type: String,
    required: [true, "Focus is required"],
  },
  tasks: [
    {
      type: String,
      required: [true, "Task is required"],
    },
  ],
});
const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
    },
    resume: {
      tyoe: String,
    },
    selfDescription: {
      type: String,
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    latex: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema,
);
module.exports = interviewReportModel;
