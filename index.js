import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./userRoute/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running..");
});
