// import express from "express";
const express = require("express");
const data = require("./data.json");
const users = require("./users.json");
const app = express();
// const port = 5000;
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => res.send(users));

app.get("/data", (req, res) => res.send(data));

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const sData = data.find((d) => d.id === id);
  res.send(sData);
});

app.post("/users", (req, res) => {
  console.log("Post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Listening: ${port}`);
});
