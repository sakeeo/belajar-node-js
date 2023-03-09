const fs = require("fs");

// generate folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// generate file contact
const filePath = "./data/contact.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

const loadContacts = () => {
  const file = fs.readFileSync(filePath, "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const findContact = (findNama) => {
  const contacts = loadContacts();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === findNama.toLowerCase()
  );
  return contact;
};

const saveContact = (contacts) => {
  fs.writeFileSync(filePath, JSON.stringify(contacts));
};

const addContact = (contact) => {
  const contacts = loadContacts();
  contacts.push(contact);
  saveContact(contacts);
};

const duplicat = (nama) => {
  const contacts = loadContacts();
  return contacts.find((contact) => contact.nama === nama);
};

module.exports = {
  loadContacts,
  findContact,
  addContact,
  duplicat,
};
