// ini adalah pembahasan variabel
// variable

//1. variable dengan let
let nama = "Ucok";
console.log(nama);

// mengubah nilai pada variabel
nama = "Dika";
console.log(nama);

//2. variable dengan var
var buah = "apel";
console.log(buah);

buah = "jeruk";
console.log(buah);

// perbedaan let dan var
// kelakuan let
let namapemain = "messi";
{
    let namapemain = "CR";
    console.log(namapemain);
}
console.log(namapemain);

// kelakuan var
var namadepan = "Dini";
{
    let namadepan = "Anton";
    console.log(namadepan);
}
console.log(namadepan);

//3. variable dengan const
const TTL = "16 Maret 2000";
console.log(TTL);