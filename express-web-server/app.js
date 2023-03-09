const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("halaman about!");
});

app.get("/contact", (req, res) => {
  res.send("halaman contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("http");
// const fs = require("fs");

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead("404");
//       res.write("Error file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });

//     const url = req.url;
//     switch (url) {
//       case "/about":
//         renderHTML("./pages/about.html", res);
//         break;

//       case "/contact":
//         renderHTML("./pages/contact.html", res);
//         break;

//       default:
//         renderHTML("./pages/index.html", res);
//         break;
//     }
//   })
//   .listen(3000, () => {
//     console.log("server is listening on port 3000..");
//   });
