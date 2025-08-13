let jumlah = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("Mendapatkan Sertifikat");
        jumlah += i;
    } else if (i % 2 !== 0 && i % 3 === 0) {
        console.log("Mengikuti Uji Kompetensi"); 
    } else if (i % 2 === 0) {
        console.log("Mengikuti Pelatihan"); 
        jumlah += i;
    } else {
        console.log("Apel Pagi"); 
    }
}
