const { demandCommand } = require("yargs");
const yargs = require("yargs");
const {
  simpanContact,
  getListContacts,
  getDetailContact,
  deleteContact,
} = require("./constacts");

yargs.command({
  command: "add",
  describe: "menambahkan contact",
  builder: {
    nama: {
      describe: "masukkan nama",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "masukkan email",
      demandOption: false,
      type: "string",
    },
    hp: {
      describe: "masukkan nomer hp",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    simpanContact(argv.nama, argv.email, argv.hp);
  },
}),
  demandCommand();

// menampilkan list nama dan nomer hp contact
yargs.command({
  command: "getlist",
  describe: "menampilkan list nama dan nomer hp",
  handler() {
    getListContacts();
  },
});

//menampilkan detail contact
yargs.command({
  command: "getdetail",
  describe: "menampilkan detail contact by nama",
  builder: {
    nama: {
      describe: "masukkan nama",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    getDetailContact(argv.nama);
  },
});

//menghapus contact
yargs.command({
  command: "delete",
  describe: "menghapus contact by nama",
  builder: {
    nama: {
      describe: "masukkan nama",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
