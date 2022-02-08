import express from "express";
const router = express.Router();

import Url from "../models/Url.js";

//@route GET /:code
//@desc redirect to long/original URL
router.get("/:code", async (req, res, _next) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No Url found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
});

export default router;
