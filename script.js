// DOM selection
// document.getElementById() // --> mengembalikan element
// const judul = document.getElementById("judul");
// judul.style.color = "salmon";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Hallo Andi";

// document.getElementsByTagName()  // mencari element-element yang nama tagnya apa
// --> HTMLCollections
// const p = document.getElementsByTagName("p"); // semua p warna biru muda
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize =  '50px';

//  document.getElementsByClassName()  -->HTMLCollections
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini di ubah';

// document.querySelector()  // -->element
// const p4 = document.querySelector("#b  p");
// p4.style.color = "violet";
// p4.style.fontSize = "1.7rem";

// const li2 = document.querySelector("section#b ul li:nth-child(2");
// li2.style.backgroundColor = "orange";

// const p =document.querySelector('p');   // select one
// p.innerHTML = 'this is update';

// document.querySelectorAll()  --> all Element
// const pAll = document.querySelectorAll("p");
// for (let i = 0; i < pAll.length; i++) {
//   pAll[i].style.backgroundColor = "lightblue";
// }

// mengubah node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// DOM manipulation

// element.innerHTML utk mengubah isi dari sebuah tag atau menambah tag, yang sudah di seleksi
// const h1Judul = document.getElementById('judul');
// h1Judul.innerHTML = '<em>andi</em>';

// const delSecA = document.querySelector('section#a');
// delSecA.innerHTML= 'delete all id a';

// menambah attribute
// const p2 = document.querySelector('.p2');
// p2.setAttribute('class' ,'label'); menimpa class dan isinya

const p2 = document.querySelector(".p2");
p2.classList.add("label"); // menambah label pada class yang sudah ada atau menambah kalimat label di class pertama

p2.classList.remove("label"); // menghapus class label

p2.classList.toggle("label"); // pengecekan kalau label ada maka true  dan kalau label tidak ada maka akan false dan ditambahkan  label nya jika di jalankan lagi, begitu lah keduanya

// buat element baru menggunakan appendChild()
const pBaru = document.createElement("p"); // ket.  sudah dibuat tapi masih disimpan dimemori

// teks utk element baru
const pTextBaru = document.createTextNode("Paragraf Baru");

// simpan teks ke dalam paragraf
pBaru.appendChild(pTextBaru);

// simpan pBaru di akhir section a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// buat element baru menggunakan dan simpan menggunakan insertBefore
// wadahnya
const liBaru = document.createElement("li");

// teks nya
const liTextBaru = document.createTextNode("item baru");

// gabungkan
liBaru.appendChild(liTextBaru);

// mengetahui parent nya
const ulIdB = document.querySelector("section#b ul");

// element before
const elementBefore = ulIdB.querySelector("li:nth-child(2)");

// panggil element parent nya lalu insertBefore parent(node baru,element_before)
ulIdB.insertBefore(liBaru, elementBefore);

// parentNode.removeChild()

// ketahui dulu parentnya
// const sectionA = document.getElementById('a');  // ada di atas

// lalu ambil elementnya
const link = document.getElementsByTagName("a")[0];

// hapus
sectionA.removeChild(link);

// parentNode.replaceChild()   // menganti node

// ketahui parent nya dulu
const sectionB = document.getElementById("b");

// tangkap element yang mau diganti atau replace
const p4 = sectionB.querySelector("p");

// element yang akan dibuat  -> wadah
const h2Baru = document.createElement("h2");

// isi dari element baru -> isi
const teksH2Baru = document.createTextNode("Judul Baru");

// memasukan ke wadahnya
h2Baru.appendChild(teksH2Baru);

// baru replace

// ambil parent nya =  sectionB, lalu node barunya = h2Baru dan akan mereplace apa ? = p4
sectionB.replaceChild(h2Baru, p4);

// yang baru
pBaru.style.backgroundColor = "lightgreen";

liBaru.style.backgroundColor = "lightblue";

h2Baru.style.backgroundColor = "lightsalmon";

// DOM EVENTS

// evenHandler, on lalu nama event nya,cth onclick
// const p3 = document.querySelector(".p3");

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lightblue";
// }
// p3.onclick = ubahWarnaP3; // membuat warna lightblue ketika di click

// addEventListener()
// const addItemSecB = document.querySelector('.addItem');
// addItemSecB.addEventListener('click', function () {
//   const ul = document.querySelector('section#b ul');
//   const liElemet = document.createElement('li');

//   const isiItemBaru = document.createTextNode('item baru');
//   liElemet.appendChild(isiItemBaru);

//   ul.appendChild(liElemet); // menambah item baru
// });  // ketika ada event click tambahkan param ke 2 yakni jalankan sebuah function

// kalau pake event handler dia akan menimpa
// const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//   p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function () {
//   p3.style.color = 'red';
// }
// hasil akhirnya tulisan warna merah karna telah di timpa

// events  kedua event jalan backgroundColor dan color
const p3 = document.querySelector(".p3");
p3.addEventListener('click', function () {
  p3.style.backgroundColor = "lightblue";
});

p3.addEventListener('click', function () {
  p3.style.color = "red";
});
