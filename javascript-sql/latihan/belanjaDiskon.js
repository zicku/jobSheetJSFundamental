let headset = 225000;
let mouse = 150000;
let keyboard = 350000;
let totalAwal = headset + mouse + keyboard;
let uangPembayaran = 800000;
let hargaSetelahDiskon;
let diskon;

console.log("===== Rincian Pembelian ======");
console.log(`Headset   = Rp. ${headset}`);
console.log(`Mouse     = Rp. ${mouse}`);
console.log(`Keyboard  = Rp. ${keyboard}`);
console.log("");
console.log(`Total Belanjaan = Rp. ${totalAwal}`);
console.log(`Pembayaran      = Rp. ${uangPembayaran}`);

if (totalAwal < 250000) {
    diskon = 0;
} else if (totalAwal >= 250000 && totalAwal < 500000) {
    diskon = 0.05;
} else if (totalAwal >= 500000 && totalAwal < 800000) {
    diskon = 0.10;
} else {
    diskon = 0.15;
}

hargaSetelahDiskon = totalAwal - (totalAwal * diskon);
let uangKembalian = uangPembayaran - hargaSetelahDiskon;

console.log(`Diskon             = ${diskon * 100}%`);
console.log(`Total Setelah Diskon = Rp. ${hargaSetelahDiskon}`);
console.log(`Kembalian            = Rp. ${uangKembalian}`);
