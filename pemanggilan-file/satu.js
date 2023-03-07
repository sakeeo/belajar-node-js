function sayHello(nama){
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa={
    nama : 'salim',
    umur : 31,
    cetakMhs(){
        return `nama saya ${this.nama} saya berusia ${this.umur} tahun.`;
    },
}

class Mobil {
    constructor(){
        console.log('object mobil telah dibuat');
    }
}


// cara export 1
// module.exports.sayHello = sayHello;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Mobil = Mobil;

//cara export 2
// module.exports = {
//     sayHello    :sayHello,
//     PI          :PI,
//     mahasiswa   :mahasiswa,
//     Mobil       :Mobil
// }

//cara export 3
module.exports = {sayHello,PI,mahasiswa,Mobil}