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


function TambahKurang() {
    let input = document.getElementById("tampil").value;

    // Memeriksa apakah input adalah angka
    if (!isNaN(input) && input !== '') {
        // Mengubah input menjadi nilai negatif
        document.getElementById("tampil").value = "(" +(parseFloat(input) * -1) + ")";
    }
}


function persen() {
    let input = document.getElementById("tampil").value;
    let result = parseFloat(input) / 100;
    document.getElementById("tampil").value = result;
}

function koma(){
    let input = document.getElementById("tampil").value;
    
    let decimalExists = input.includes('.');

    // Jika belum ada koma desimal, tambahkan satu
    if (!decimalExists) {
        document.getElementById("tampil").value += '.';
    }
}


function resullt() {
    let input = document.getElementById("tampil").value;

    // Mengganti simbol kembali ke operator asli
    input = input.replace(/÷/g, '/').replace(/×/g, '*');

    try {
        // Evaluasi ekspresi matematika
        let result = eval(input);

        // Menampilkan hasil
        document.getElementById("tampil").value = result;
    } catch (error) {
        // Menangani kesalahan evaluasi
        document.getElementById("tampil").value = 'Kesalahan';
    }
}

