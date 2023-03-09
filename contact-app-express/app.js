const { render } = require("ejs");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.get("/", (req, res) => {
  res.render("index", {
    title: "index",
    layout: "layouts/main",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    layout: "layouts/main",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact",
    layout: "layouts/main",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
