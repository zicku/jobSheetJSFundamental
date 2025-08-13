const daftarBelanja = [];

daftarBelanja.push("Beras","Minyak","Gula");
daftarBelanja.push("telur","sayur","buah");
daftarBelanja.splice(1,1);
console.log(daftarBelanja);
daftarBelanja.sort();
console.log("Daftar Belanja Bu Lily :")

daftarBelanja.forEach((nilai,i)=>{
    console.log(`${i+1} ${nilai}`)
})

