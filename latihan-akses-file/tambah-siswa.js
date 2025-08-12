const fs = require("fs");

const filePath = "siswa.json";
let daftar = [];

// Cek apakah file sudah ada 
if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    daftar = JSON.parse(content);
}

// Data siswa baru
let siswaBaru1 = {
    nama: "sunFlower",
    kelas: "web",
    nilai: [93, 97, 68]
};

let siswaBaru2 = {
    nama: "magnolia",
    kelas: "web",
    nilai: [98, 77, 68]
};

// Tambah ke array
daftar.push(siswaBaru1);
daftar.push(siswaBaru2);

// Menyimpan data kembali ke file siswa.json
fs.writeFileSync(filePath, JSON.stringify(daftar, null, 2));
console.log("Data siswa berhasil ditambahkan ke siswa.json");
