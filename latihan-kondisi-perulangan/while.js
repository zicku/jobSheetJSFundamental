let ulang = true;

do {
    let i = 1;

    console.log("menampilkan bilangan bulat dari 1 sampai 20");
    while (i <= 20) {
        if (i%2 === 0){
            console.log(i);
            
        }
        i++; 
    }

    ulang = false; 
} while (ulang);
