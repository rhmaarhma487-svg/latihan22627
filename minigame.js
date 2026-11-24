// variabel untuk menyimpan porsi makan kucing 
// dengan nilai awal (0)
let porsi = 0

//siapkan aset suara di variabel 
let suaraMakan = new Audio("minigame/makan.mp3")
let suaraMain = new Audio ("minigame/ajak mainnn.mp3")
let suaraReset = new Audio ("minigame/reset.mp3")

function beriMakan() {
  //efek suara makan
  suaraMakan.currentTime = 0
  suaraMakan.play()
  
  // 1. ambil teks dari input angka kotak teks 
  let teksInput = document.getElementById('input-makanan').value
  
  // 2. ubah string menjadi angka
  let jumlahMakanan = Number(teksInput)
  
  // 3. oprasi penjumlahan angka8
  porsi = porsi + jumlahMakanan
  
  updateTampilan()
}

//fungsi untuk mengajak main kucing (porsi dikurangi 1)
function ajakMain() {
  //efek suara ajak main
  suaraMain.currentTime = 0
  suaraMain.play()
  
  // mengurangi porsi 1 tapi cegah jangan sampai negatif
  if (porsi > 0) {
    porsi = porsi - 1
  }
  
  updateTampilan()
}

function reset() {
  //suara reset
  suaraReset.currentTime = 0
  suaraReset.play()
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