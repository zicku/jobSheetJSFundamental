function luasPersegi(sisi) {
    return sisi * sisi;
}
function kelilingPersegi(sisi) {
    return 4 * sisi;
}

function luasPersegiPanjang(p, l) {
    return p * l;
}
function kelilingPersegiPanjang(p, l) {
    return 2 * (p + l);
}

function luasLingkaran(r) {
    return 22/7 * r * r;
}
function kelilingLingkaran(r) {
    return 2 * 22/7* r;
}

function luasSegitiga(a, t) {
    return 0.5 * a * t;
}
function kelilingSegitiga( sisi) {
    return 3* sisi;
}

// Fungsi Menampilkan Luas
function LuasBangunDatar() {
    console.log(">> LUAS BANGUN DATAR<<")
    console.log(`Luas Persegi Dengan sisi 8 adalah ${luasPersegi(8)}`);
    console.log(`Luas Persegi Panjang Dengan Panjang 9 dna lebar 3 adalah  ${luasPersegiPanjang(9, 3)}`);
    console.log(`Luas Lingkaran dengan jari jari 6 adalah ${luasLingkaran(6)}`);
    console.log(`Luas Segitiga dengan alas 6 dan tinggi 4 adalah  ${luasSegitiga(6, 4)}`);
    console.log("")
}

// Fungsi Menampilkan Keliling
function KelilingBangunDatar() {
    console.log(">> KELILING BANGUN DATAR<<")
    console.log(`Keliling Persegi Dengan sisi 8 adalah  ${kelilingPersegi(8)}`);
    console.log(`Keliling Persegi Panjang Degan Panjang 9 dan Lebar 3 adalah ${kelilingPersegiPanjang(9, 3)}`);
    console.log(`Keliling Lingkaran Dengan jari jari 6 adalah ${kelilingLingkaran(6)}`);
    console.log(`Keliling Segitiga Dengan sisi 6 adalah  ${kelilingSegitiga(6)}`);
}

LuasBangunDatar();
KelilingBangunDatar();
