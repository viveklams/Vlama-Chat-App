import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //root route http://localhost:5000
  res.send("Hello World!!");
});

app.listen(5000, () => console.log(`server is Running on port ${PORT}`));
