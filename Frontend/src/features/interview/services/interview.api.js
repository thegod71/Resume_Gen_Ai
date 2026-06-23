import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const generateInterviewReport = async ({
  jobDescription,
  selfDescription,
  resumeFile,
}) => {
  /// we  create form data because to send file form frontend to backend we need form
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription);
  formData.append("resumeFile", resumeFile);

  export const response = await api.post("/api/interview", formData, {
    headers: {
      "Content-Type": "multiport/form-data",
    },
  });
  return response.data;
};

export const getInterviewReportById = async (interviewId) => {
  const response = await api.get("/api/interview/report/${interviewId}");
  return response.data;
};

export const getAllInterviewReports = async () => {
  const response = await api.get("/api/interview");
  return response.data;
};
