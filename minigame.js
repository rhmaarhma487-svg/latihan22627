// variabel untuk menyimpan porsi makan kucing 
// dengan nilai awal (0)
let porsi = 0

function beriMakan() {
  // tambah porsi makan +1
  porsi = porsi + 1
  
  updateTampilan()
}

//fungsi untuk mengajak main kucing (porsi dikurangi 1)
function ajakMain() {
  // mengurangi porsi 1 tapi cegah jangan sampai negatif
  if (porsi > 0) {
    porsi = porsi - 1
  }
  
  updateTampilan()
}

function reset() {
  porsi = 0
  
  updateTampilan()
}

//fungsi untuk memperbarui tampilan html 
function updateTampilan() {
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 10) {
    // ganti gambar kucing menjadi gemuk
    document.getElementById('foto-kucing').src = "gambar/gemuk.jpg"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing gemuk 😻"
  } else if (porsi >= 5) {
    // ganti gambar kucing menjadi sedang
    document.getElementById('foto-kucing').src = "gambar/sedang.jpg"
    
    // menampilkan tulisan kucing sedang
    document.getElementById('status-kucing').innerText = "kucing sedang 😺"
  } else {
    // ganti gambar kucing menjadi kurus 
    document.getElementById('foto-kucing').src = "gambar/kurus.jpg"
    
    // menampilkan tulisan kucing kurus
    document.getElementById('status-kucing').innerText = "kucing kurus 😿"
  }
}