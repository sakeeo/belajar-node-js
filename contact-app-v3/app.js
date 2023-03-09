const { render } = require("ejs");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const { loadContacts, findContact } = require("./utils/contacts");

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
  const contacts = loadContacts();
  res.render("contact", {
    title: "contact",
    layout: "layouts/main",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  console.log(contact);
  res.render("details", {
    title: "details",
    layout: "layouts/main",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
