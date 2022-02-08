import express from "express";
import mongoose from "mongoose";
import index from "./routes/index.js";
import urlRoute from "./routes/url.js";

const app = express();

//Connect to database
import dotenv from "dotenv";
dotenv.config();
const db = process.env.DB_CONNECT;
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("Connected to the MongoDB..");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();

app.get("/", (req, res) => res.send("Hello World"));

app.use(express.json({ extended: false }));

// Define routes
app.use("/", index);
app.use("/api/url", urlRoute);

const PORT = 5005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
