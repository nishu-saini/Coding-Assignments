const http = require("http");
const { menProducts, womenProducts } = require("./category");

// create the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        success: true,
        message: "Welcome to Men & Women Dummy Data",
      })
    );
  } else if (req.url === "/men") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        success: true,
        products: menProducts(),
      })
    );
  } else if (req.url === "/women") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        success: true,
        products: womenProducts(),
      })
    );
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        message: "Page not found",
      })
    );
  }
});

// Listen to server
const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
