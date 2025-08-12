const  fs = require("fs");

let siswa =[
    {
        nama : "Lily",
        kelas : "web",
        nilai :[78,92,87],
    },
];

fs.writeFileSync("siswa.json",JSON.stringify(siswa, null,2));
console.log("Data Siswa berhasil ditulis ke file siswa.json")