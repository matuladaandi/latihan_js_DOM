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

// tangkap element
const sliderRed = document.querySelector("input[name=sliderRed]");
const sliderGreen = document.querySelector("input[name=sliderGreen]");
const sliderBlue = document.querySelector("input[name=sliderBlue]");

// event ketika slider di geser-geser
sliderRed.addEventListener("input", function () {
  const r = sliderRed.value;

  const g = sliderGreen.value;

  const b = sliderBlue.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + " , " + b + ")";

  // mengambil nilainya
  //    console.info(sliderRed.value);
});
sliderGreen.addEventListener("input", function () {
  const r = sliderRed.value;

  const g = sliderGreen.value;

  const b = sliderBlue.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + " , " + b + ")";
});
sliderBlue.addEventListener("input", function () {
  const r = sliderRed.value;

  const g = sliderGreen.value;

  const b = sliderBlue.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + " , " + b + ")";
});

// ketika mouser bergerak di body
document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  //   console.info(event.clientY);

  // ukuran browser
  // console.info(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ",0)";
});
