const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Just go to '/random' route for random number`,
  });
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 1000);

  res.status(200).json({
    success: true,
    random: randomNumber,
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
