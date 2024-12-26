	/*


	//Deskripsi Program 
	Program Interval Penilaian Siswa
	Deskripsi: Buat program yang menerima nilai siswa (0-100) dan menentukan interval kategori:
	0-59: Tidak Lulus
	60-79: Cukup
	80-89: Baik
	90-100: Sangat Baik
	*/

	// Fungsi untuk menentukan kategori nilai
	function tentukanKategori(nilai) {
		if (nilai >= 90 && nilai <= 100){
			return "Sangat Baik";
		} else if (nilai >= 80 && nilai < 90){
			return "Baik";
		} else if (nilai >= 60 && nilai < 80){
			return "Cukup";
		} else if (nilai >= 0 && nilai < 60){
			return "Tidak Lulus";
		} else {
			return "Nilai Tidak Valid"
		}
	}

	// Input
	const nilai = parseInt(prompt("Masukkan nilai siswa (0-100):"));
	const kategori = tentukanKategori(nilai);
	console.log(`Kategori nilai: ${kategori}`);



