const getUserSync = (id)=>{
    const nama = id === 1 ? 'muhammad' : 'lim';
    return {id,nama}
};
const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const hello = 'Hello word';
console.log(hello);

