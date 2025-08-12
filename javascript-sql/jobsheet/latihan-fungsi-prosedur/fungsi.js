function hitungLuas(sisi){
    return sisi*sisi; 
}

function hitungKeliling(sisi){
    return 4*sisi;
}

function tampilkanPersegi(sisi) {
    console.log("=========================Persegi==================");
    console.log("sisi                   :", sisi);
    console.log("luas persegi           :", hitungLuas(sisi));
    console.log("keliling persegi        :", hitungKeliling(sisi));
    console.log("==================================================");
}

tampilkanPersegi(7);
tampilkanPersegi(23)