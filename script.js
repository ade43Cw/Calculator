function appendToDisplay(value) {
    let input = document.getElementById("tampil").value;

    // Jika nilai yang dimasukkan adalah '/' atau '*', ganti menjadi '÷' dan '×' masing-masing
    if (value === '/') {
        value = '÷'; // Mengubah '/' menjadi '÷'
    } else if (value === '*') {
        value = '×'; // Mengubah '*' menjadi '×'
    }

    // Memeriksa apakah karakter terakhir dari input adalah operator
    let lastChar = input.charAt(input.length - 1);

    // Menghapus operator sebelum menambahkan operator baru
    if (['+', '-', '÷', '×'].includes(lastChar) && ['+', '-', '÷', '×'].includes(value)) {
        // Jika karakter terakhir adalah operator dan operator baru juga operator, ganti karakter terakhir
        document.getElementById("tampil").value = input.slice(0, -1) + value;
    } else {
        // Menambahkan nilai baru ke dalam input
        document.getElementById("tampil").value += value;
    }
}

function clearDisplay() {
    document.getElementById("tampil").value = "";
}

function clearToDisplay() {
    let input = document.getElementById("tampil").value;
    document.getElementById("tampil").value = input.slice(0, -1);
}


let toggleCount = 0; // variabel untuk melacak jumlah klik

function toggleNegative() {
    let input = document.getElementById("tampil").value;

    // Menggunakan ekspresi reguler untuk mencari angka terakhir dalam input
    let lastNumberMatch = input.match(/[-+*/]?(\d+(\.\d+)?)(?!.*\d)/);

    if (lastNumberMatch) {
        // Mengambil angka terakhir dari input
        let lastNumber = lastNumberMatch[1];

        if (toggleCount % 2 === 0) {
            // Jika jumlah klik genap, angka menjadi positif
            input = input.replace(/([-+*/]?\d+(\.\d+)?)(?!.*\d)/, Math.abs(parseFloat(lastNumber)));
        } else {
            // Jika jumlah klik ganjil, angka menjadi negatif
            input = input.replace(/([-+*/]?\d+(\.\d+)?)(?!.*\d)/, -Math.abs(parseFloat(lastNumber)));
        }
        document.getElementById("tampil").value = input;
        toggleCount++; // Update jumlah klik setiap kali fungsi dipanggil
    } else {
        // Jika tidak ada angka terakhir, tambahkan tanda negatif pada awal input
        if (input !== '0') {
            document.getElementById("tampil").value = '-' + input;
            toggleCount = 1; // Set jumlah klik menjadi ganjil karena tanda negatif sudah ditambahkan
        }
    }
}


function persen() {
    let input = document.getElementById("tampil").value;
    let result = parseFloat(input) / 100;
    document.getElementById("tampil").value = result;
}

function result() {
    let input = document.getElementById("tampil").value;

    // Mengganti simbol kembali ke operator asli
    input = input.replace(/÷/g, '/').replace(/×/g, '*');

    try {
        // Evaluasi ekspresi matematika
        let result = eval(input);

        // Memastikan hasil memiliki maksimal 5 angka desimal
        let formattedResult = parseFloat(result.toFixed(5));

        // Menampilkan hasil
        document.getElementById("tampil").value = formattedResult;
    } catch (error) {
        // Menangani kesalahan evaluasi
        document.getElementById("tampil").value = 'Error';
    }
}
