// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)
function displayRandomImage() {
  const img = document.createElement("img");
  const value = Math.floor(Math.random() * 9) + 1;

  img.setAttribute("src", `img/${value}.jpg`);
  img.setAttribute("width", "1000");

  img.onerror = () => {
    console.log("Error loading image");
  };

  document.body.appendChild(img);
}

displayRandomImage();
