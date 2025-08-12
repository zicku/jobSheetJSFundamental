// Array awal berisi nilai siswa
let nilai = [75, 88, 92];

console.log("1. Nilai Awal:");
nilai.forEach((n, i) => {
    console.log(`siswa ${i + 1}: ${n}`);
});
console.log("");

// Menambahkan nilai baru menggunakan push
nilai.push(60);
console.log("2. Setelah nilai 60 ditambahkan (push):");
console.log(nilai);
console.log("");

// Menghapus nilai terakhir dengan pop
let nilaiTerakhir = nilai.pop();
console.log("3. Setelah menghapus nilai pop:", nilaiTerakhir);
console.log("Nilai Sekarang:", nilai);
console.log("");

// Menggunakan map untuk menambahkan bonus 5 poin ke semua nilai
let nilaiBonus = nilai.map((n) => n + 5);
console.log("4. Nilai Setelah ditambahkan bonus 5 point (map):");
console.log(nilaiBonus);
console.log("");

// Menampilkan nilai bonus dengan forEach
console.log("5. Cetak Nilai akhir siswa:");
nilaiBonus.forEach((n, i) => {
    console.log(`siswa ${i + 1}: ${n}`);
});
