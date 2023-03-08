const http = require("http");
const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead("404");
      res.write("Error file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    switch (url) {
      case "/about":
        renderHTML("./pages/about.html", res);
        break;

      case "/contact":
        renderHTML("./pages/contact.html", res);
        break;

      default:
        renderHTML("./pages/index.html", res);
        break;
    }
  })
  .listen(3000, () => {
    console.log("server is listening on port 3000..");
  });
