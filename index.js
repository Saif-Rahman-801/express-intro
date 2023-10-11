// import express from "express";
const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res) => res.send(data));

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const sData = data.find((d) => d.id === id);
  res.send(sData);
});

app.listen(port, () => {
  console.log(`Listening: ${port}`);
});
