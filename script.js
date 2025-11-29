/* const significa que a refeencia não será reatribuida mas você pode alterar a propriedade do elemento (tema.src) */
const tema = document.getElementById("tema");

/* addEventListener adiciona um ouvinte no CacheStorage, quando clicado executa a funcão () => */
tema.addEventListener("click", () => {

/* document.body.classList.toggle("dark") alterna o toggle presença da classe dark no body, 
classList.toggle() se tiver "dark", ele remove, se não, ele adiciona por isso a imagem muda*/
  document.body.classList.toggle("dark");

  // SE o body tiver a classe "dark" → mostra lua
  if (document.body.classList.contains("dark")) {
    tema.src = "/img/full-moon.png";  
  } else {
    // SENÃO → volta o sol
    tema.src = "/img/sun.png";
  }
});