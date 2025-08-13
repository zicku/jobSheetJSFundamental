let angka1 = 10;
let angka2 = 0;

function bagiAngka(a, b) {
    try {
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol!");
        } else if (isNaN(a) || isNaN(b)) {
            throw new Error("Variabel tidak dikenali!");
        }

        let hasil = a / b;
        console.log("Hasil Pembagian:", hasil);
    } catch (e) {
        console.error("Error:", e.message);
    }
}

bagiAngka(angka1, angka2);

console.log("Program Selesai");
