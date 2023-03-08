const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// generate folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
} 

// generate file contact
const filePath = './data/contact.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]','utf-8');
}


const question =(q)=>{
    return new Promise((resolve,rejects)=>{
        rl.question(q,(answer)=>{
            resolve(answer);
        });
    });
};

const simpanContact=(nama,email,hp)=>{
    const contact = {nama,email,hp}
    const file = fs.readFileSync(filePath,'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFile(filePath, JSON.stringify(contacts), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        console.log(contacts);
        rl.close();
    });
}

module.exports = {question,simpanContact}