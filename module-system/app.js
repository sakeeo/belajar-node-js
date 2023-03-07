const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Masukkan nama : ',(nama)=>{
    rl.question('Masukkan nomer hp : ',(hp)=>{
        const contact = {nama,hp}
        const file = fs.readFileSync('contact.json','utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFile('contact.json', JSON.stringify(contacts), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            console.log(contacts);
            rl.close();
        });

    })
})

// const data ="tuliskan file ini ke pesan";
// fs.writeFile('message.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// const data = fs.readFileSync('message.txt');
// console.log(data.toString());

// fs.readFile('message.txt','utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
  