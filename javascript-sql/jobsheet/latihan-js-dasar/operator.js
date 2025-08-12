console.log("aritmatika");
let a =150;
let b = 40;

console.log("Penjumlahan:", a+b);
console.log("Pengurangan:", a-b);
console.log("Perkalian:", a*b);
console.log("Pembagian:", a/b);
console.log("Modulus (sisa bagi):", a%b);

//asigment
console.log("asigment");
let x = 35;

x+=5;
console.log("x += 5= ",x);

x-=2;
console.log("x -= 2= ",x);

x*=3;
console.log("x *= 3= ",x);

x/=2;
console.log("x /= 2= ",x);

//perbandingan 
console.log("perbandingan");
let c = 10;
let d = "10";

console.log("c == d :", c == d );
console.log("c === :", c === d );
console.log("c != :", c != d );
console.log("c > :", c > d );
console.log("c <= :", c <= d );

//konsidional 
console.log("Kondisional");

let umur = 20;
let punyaKTP = true;

console.log("Boleh buat SIM?", umur >=17 && punyaKTP);
console.log("Remaja atau dewasa?", umur >=13 || umur>=20);
console.log("Bukan anak-anak?", !(umur<13));