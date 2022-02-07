import express from "express";
import connectDB from "./confing/db";

const app = express();

//Connect to database
connectDB();

app.use(express.json({ extended: false }));

const PORT = 5005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
