const express = require("express");
const classList = require("./data/class.json");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the backend server for the GoT Class Map");
});

app.get("/class", (req, res) => {
  res.json(classList);
  console.log("success");
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
