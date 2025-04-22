const hargaPerTiket = 75000;

        function updateTotalHarga() {
            const jumlahTiket = document.getElementById('jumlahTiket').value;
            const totalHarga = jumlahTiket * hargaPerTiket;
            document.getElementById('totalHarga').value = `Rp ${totalHarga.toLocaleString('id-ID')}`;
        }