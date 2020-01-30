function showAltEmptyImages() {
  let images = document.querySelectorAll("img:not([alt])");

  images.forEach(image  => {
    image.setAttribute("style", "filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);");
  })
}

showAltEmptyImages()
