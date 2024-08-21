function animarTitulo() {
    const titulo = document.getElementById("output__titulo");
    titulo.classList.add("shake");
    setTimeout(() => {
        titulo.classList.remove("shake");
    }, 500); 
}

