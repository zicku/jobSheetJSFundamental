const fs = require("fs");


let data = fs.readFileSync("siswa.json", "utf8");
let siswaArray = JSON.parse(data);


siswaArray.forEach((siswa, i) => {
    console.log(`${i + 1}. Nama : ${siswa.nama}`);
    console.log(`   Kelas : ${siswa.kelas}`);
    console.log(`   Nilai : ${siswa.nilai.join(", ")}`);
});
