require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");
const invokeGeminiAi = require("./src/services/ai.service");
connectToDB();
invokeGeminiAi();
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Server is running on ${PORT}`);
});
