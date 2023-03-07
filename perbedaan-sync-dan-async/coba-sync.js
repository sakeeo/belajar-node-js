const getUser = (id,callback)=>{
    const time = id === 1 ? 3000 : 5000;
    setTimeout(()=>{
        const nama = id === 1 ? 'muhammad' : 'lim';
        callback({id,nama})
    },time)
   
};
const userSatu = getUser(1,(hasil)=>{
    console.log(hasil);
});

const userDua = getUser(2,(hasil)=>{
    console.log(hasil);
});

const hello = 'Hello word';
console.log(hello);