const btnBColor = document.getElementById("btn-color-bg");
btnBColor.onclick = function () {
  // document.body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class', 'biru-muda');

  // ketika class nya ada akan dihilangkan,namun ketika classnya tidak ada maka akan ditambahkan
  document.body.classList.toggle("biru-muda");
};

// menambahkan tombol melalui js tanpa menyentuh html nya
const btnRandomColor = document.createElement("button"); // wadah nya

const textRandomColor = document.createTextNode("Random Color"); // isi nya

btnRandomColor.appendChild(textRandomColor); // wadah di isi

btnRandomColor.setAttribute("type", "button"); // menambahkan tipe

// simpan setelah btnBColor
btnBColor.after(btnRandomColor);

btnRandomColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
