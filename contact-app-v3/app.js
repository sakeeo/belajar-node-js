const { render } = require("ejs");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const {
  loadContacts,
  findContact,
  addContact,
  duplicat,
} = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));

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

app.post(
  "/contact",
  [
    body("nama").custom((val) => {
      const isduplicat = duplicat(val);
      if (isduplicat) {
        throw new Error("nama sudah terdaftar");
      }
      return true;
    }),
    check("email", "email tidak valid").isEmail(),
    check("hp", "nomer hp tidak valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    // addContact(req.body);
    // res.redirect("/contact");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("form-add-contact", {
        title: "form-add-contact",
        layout: "layouts/main",
        errors: errors.array(),
      });
    }
  }
);

app.get("/contact/add", (req, res) => {
  res.render("form-add-contact", {
    title: "form-add-contact",
    layout: "layouts/main",
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
