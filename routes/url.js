import express from "express";
const router = express.Router();
import validUrl from "valid-url";
import shortid from "shortid";
import Url from "../models/Url.js";
import dotenv from "dotenv";
dotenv.config();

//@route  POST/api/url/shorten
//@desc   Create sgort Url
router.post("/shorten", async (req, res, _next) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.baseUrl;

  //check base Url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base Url");
  }
  // create Url code
  const urlCode = shortid.generate();
  // check long Url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.error(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("Invalid long Url");
  }
});

export default router;
