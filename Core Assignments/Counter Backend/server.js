const express = require("express");
const app = express();

var counter = 0;

app.get("/", (req, res) => {
  res.status(200).json({
    counter,
  });
});

app.get("/increment", (req, res) => {
  counter++;

  res.status(200).json({
    counter,
  });
});

app.get("/decrement", (req, res) => {
  counter--;

  res.status(200).json({
    counter,
  });
});

app.get("/reset", (req, res) => {
  counter = 0;

  res.status(200).json({
    counter,
  });
});

// listen to server
const port = 5050;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
