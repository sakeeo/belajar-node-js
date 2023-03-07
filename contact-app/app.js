const {question,simpanContact} = require('./constacts')
const main = async () => {
    const nama = await question('nama : ');
    const email = await question('email :');
    const hp = await question('hp :');

    simpanContact(nama,email,hp);
}
main();

