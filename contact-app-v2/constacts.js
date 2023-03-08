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

const simpanContact = (nama, email, hp) => {
  const contact = { nama, email, hp };
  const file = fs.readFileSync(filePath, "utf-8");
  const contacts = JSON.parse(file);

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

module.exports = { simpanContact };
