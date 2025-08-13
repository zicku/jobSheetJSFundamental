let dataProduct = [
    {nama : "New Balance NB530", harga : 390000},
    {nama : "Nike Vomero 5", harga : 350000},
    {nama : "Adidas Samba", harga : 180000},
    {nama : "Onitsuka Tiger Mexico", harga : 420000}
]
console.log("======Rincian Belanja Sepatu=====")
dataProduct.forEach((nilai,i)=>{
    console.log(`${i+1}. ${nilai.nama} - Rp.${nilai.harga}`);
})

let totalBelanjaan = 0;
dataProduct.forEach((nilai)=>{
    totalBelanjaan += nilai.harga;  
})

if (totalBelanjaan < 250000) {
    diskon = 0;
} else if (totalBelanjaan >= 250000 && totalBelanjaan < 500000) {
    diskon = 0.05;
} else if (totalBelanjaan >= 500000 && totalBelanjaan < 800000) {
    diskon = 0.10;
} else {
    diskon = 0.15;
}

let uangPembayaran = 1200000;
hargaSetelahDiskon = totalBelanjaan - (totalBelanjaan * diskon);
let uangKembalian = uangPembayaran - hargaSetelahDiskon;


console.log(` Total Belanja = Rp ${totalBelanjaan}`);
console.log(`Diskon             = ${diskon * 100}%`);
console.log(`Total Setelah Diskon = Rp. ${hargaSetelahDiskon}`);
console.log(`Kembalian            = Rp. ${uangKembalian}`);
