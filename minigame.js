// variabel untuk menyimpan porsi makan kucing 
// dengan nilai awal (0)
let porsi = 0

function beriMakan() {
  // tambah porsi makan +1
  porsi = porsi + 1
  
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi 
  
  if (porsi>= 10) {
  // ganti gambar kucing menjadi gemuk
  document.getElementById('foto-kucing').src = "gambar/gemuk.jpg"
  
  // menampilkan tulisan kucing gemuk
  document.getElementById('status-kucing'). innerText = "kucing gemuk 😻"
  } else if(porsi >=5) {
      // ganti gambar kucing menjadi sedang
  document.getElementById('foto-kucing').src = "gambar/sedang.jpg"
  
  // menampilkan tulisan kucing sedang
  document.getElementById('status-kucing'). innerText = "kucing sedang 😺"
  }
}