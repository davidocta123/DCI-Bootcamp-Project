	// Fungsi untuk menghitung total harga setelah diskon
function hitungTotalHarga(harga, diskon, jumlah) {
    if (harga <= 0 || diskon < 0 || diskon > 100 || jumlah <= 0) {
        return "Input tidak valid.";
    }
    const potonganDiskon = harga * (diskon / 100); // Menghitung potongan diskon
    const hargaSetelahDiskon = harga - potonganDiskon; // Mengurangi potongan dari harga
    const totalHarga = hargaSetelahDiskon * jumlah; // Mengalikan dengan jumlah barang
    return totalHarga;
}

// Input
const harga = parseFloat(prompt("Masukkan harga barang:"));
const diskon = parseFloat(prompt("Masukkan persentase diskon:"));
const jumlah = parseInt(prompt("Masukkan jumlah barang:"));

// Validasi input
if (!isNaN(harga) && !isNaN(diskon) && !isNaN(jumlah)) {
    const totalHarga = hitungTotalHarga(harga, diskon, jumlah);
    console.log(`Total harga setelah diskon: ${totalHarga}`);
} else {
    console.log("Input yang Anda masukkan tidak valid.");
}


