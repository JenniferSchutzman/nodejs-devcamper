const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

app.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
});

app.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
});

app.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Deletebootcamp ${req.params.id}` });
});
