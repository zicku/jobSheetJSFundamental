const fs = require('fs');

// Membaca file data.json secara synchronous
const teks = fs.readFileSync("film.json", "utf-8");
const data = JSON.parse(teks);


// Menulis data baru ke film.json
data.push(
    { id: 1, nama: 'Agak Laen(2024)', gendre: ['horor','comedy']},
    { id: 2, nama: 'Habibie & Ainun (2012)', gendre: ['drama','romantis']},
    { id: 3, nama: 'Dilan 1990 (2028)', gendre: ['romantis']},

);

// Menyimpan kembali ke file dengan format JSON yang rapi
fs.writeFileSync("film.json", JSON.stringify(data, null, 2));

console.log("data berhasil dimasukan");

// menampilkan 
data.forEach((item) => {
    console.log(`${item.id}. nama : ${item.nama}, gendre : ${item.gendre}`)
    
});
