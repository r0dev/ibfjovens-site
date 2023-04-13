function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

 
  // pegando a tag img
  const img = document.querySelector("#profile img")
  // Substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem lightmode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
