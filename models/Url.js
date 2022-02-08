import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});

export default mongoose.model("Url", urlSchema);
