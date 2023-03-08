const yargs = require("yargs");
const { simpanContact } = require("./constacts");

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
    // const contact = {
    //   nama: argv.nama,
    //   email: argv.email,
    //   hp: argv.hp,
    // };
    // console.log(contact);
    simpanContact(argv.nama, argv.email, argv.hp);
  },
});

yargs.parse();
