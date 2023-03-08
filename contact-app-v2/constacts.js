const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

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

const simpanContact = (nama, email, hp) => {
  const contact = { nama, email, hp };
  const contacts = loadContacts();
  //cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("nama sudah terdaftar, gunakan nama lain")
    );
    return false;
  }
  //validasi email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(
        chalk.red.inverse.bold("email tidak valid, masukkan email yg benar")
      );
      return false;
    }
  }
  //validasi nomer hp
  if (!validator.isMobilePhone(hp, "id-ID")) {
    console.log(
      chalk.red.inverse.bold("nomer hp tidak valid, masukkan nomer hp yg benar")
    );
    return false;
  }
  contacts.push(contact);
  fs.writeFile(filePath, JSON.stringify(contacts), (err) => {
    if (err) throw err;
    console.log(chalk.green.inverse.bold("Contact berhasil di daftarkan!"));
  });
};

const getListContacts = () => {
  const contacts = loadContacts();
  console.log(chalk.blue.inverse.bold("daftar contact :"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.hp}`);
  });
};

const getDetailContact = (findNama) => {
  const contacts = loadContacts();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === findNama.toLowerCase()
  );
  if (!contact) {
    console.log(chalk.red.inverse.bold(`nama ${findNama} tidak ditemukan!`));
    return false;
  }
  console.log(chalk.blue.inverse.bold("detail contact :"));
  console.log(`nama : ${contact.nama}`);
  console.log(`nomer hp : ${contact.hp}`);
  if (contact.email) {
    console.log(`email : ${contact.email}`);
  }
};

//delete Contact
const deleteContact = (findNama) => {
  const contacts = loadContacts();
  const newcontact = contacts.filter(
    (contact) => contact.nama.toLowerCase() === findNama.toLowerCase()
  );

  if (!contacts.lenght === newcontact.lenght) {
    console.log(chalk.red.inverse.bold(`nama ${findNama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync(filePath, JSON.stringify(newcontact));
  console.log(chalk.green.inverse.bold(`nama ${findNama} berhasil dihapus!`));
};

module.exports = {
  simpanContact,
  getListContacts,
  getDetailContact,
  deleteContact,
};
