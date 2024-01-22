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


// // document.getElementsByClassName()  -->HTMLCollections
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
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';