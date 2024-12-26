// Array untuk menyimpan data siswa
const siswa = [
    ["DCI", 20] // Contoh data awal
];

// Fungsi untuk menambah data siswa
function tambahSiswa(nama, nilai) {
    siswa.push([nama, nilai]);
    console.log(`Data siswa '${nama}' dengan nilai ${nilai} berhasil ditambahkan.`);
}

// Fungsi untuk menampilkan semua data siswa
function tampilkanSiswa() {
    if (siswa.length === 0) {
        console.log("Tidak ada data siswa.");
    } else {
        console.log("Daftar Siswa:");
        siswa.forEach(([nama, nilai], index) => {
            console.log(`${index + 1}. Nama: ${nama}, Nilai: ${nilai}`);
        });
    }
}

// Fungsi untuk mengubah nilai siswa
function ubahNilaiSiswa(nama, nilaiBaru) {
    const index = siswa.findIndex(([n]) => n === nama);
    if (index !== -1) {
        siswa[index][1] = nilaiBaru;
        console.log(`Nilai siswa '${nama}' berhasil diubah menjadi ${nilaiBaru}.`);
    } else {
        console.log(`Siswa dengan nama '${nama}' tidak ditemukan.`);
    }
}

// Fungsi untuk menghapus data siswa
function hapusSiswa(nama) {
    const index = siswa.findIndex(([n]) => n === nama);
    if (index !== -1) {
        siswa.splice(index, 1);
        console.log(`Data siswa '${nama}' berhasil dihapus.`);
    } else {
        console.log(`Siswa dengan nama '${nama}' tidak ditemukan.`);
    }
}

// Menu interaktif untuk mengelola data siswa
while (true) {
    console.log("\n=== Menu Manajemen Data Siswa ===");
    console.log("1. Tambah Siswa");
    console.log("2. Tampilkan Semua Siswa");
    console.log("3. Ubah Nilai Siswa");
    console.log("4. Hapus Siswa");
    console.log("5. Keluar");
    const pilihan = parseInt(prompt("Pilih menu (1-5):"));

    switch (pilihan) {
        case 1: {
            const nama = prompt("Masukkan nama siswa:");
            const nilai = parseInt(prompt("Masukkan nilai siswa:"));
            if (!isNaN(nilai)) {
                tambahSiswa(nama, nilai);
            } else {
                console.log("Nilai harus berupa angka.");
            }
            break;
        }
        case 2:
            tampilkanSiswa();
            break;
        case 3: {
            const nama = prompt("Masukkan nama siswa yang ingin diubah nilainya:");
            const nilaiBaru = parseInt(prompt("Masukkan nilai baru:"));
            if (!isNaN(nilaiBaru)) {
                ubahNilaiSiswa(nama, nilaiBaru);
            } else {
                console.log("Nilai harus berupa angka.");
            }
            break;
        }
        case 4: {
            const nama = prompt("Masukkan nama siswa yang ingin dihapus:");
            hapusSiswa(nama);
            break;
        }
        case 5:
            console.log("Keluar dari program. Terima kasih!");
            break;
        default:
            console.log("Pilihan tidak valid. Silakan coba lagi.");
    }

    if (pilihan === 5) {
        break;
    }
}
