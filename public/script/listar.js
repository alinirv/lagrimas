// Função para criar um elemento de card para uma lágrima
function criarCardLagrima(lagrima) {
  const card = document.createElement("div");
  card.classList.add("lagrima-card");

  card.innerHTML = `
        <h3>${lagrima.nome}</h3>
        <p>Categoria: ${lagrima.categoria}</p><br>
        <p>Autor: ${lagrima.autor}</p><br>
        <a href="/lagrima?id=${lagrima.id} ">Editar</a>
    `;
  return card;
}
// função retorna todas as lagrimas
function getLagrimas() {
  fetch("/api/lagrimas")
    .then((response) => response.json())
    .then((lagrimas) => {
      const lagrimasContainer = document.getElementById("lagrimas-container");
      lagrimas.forEach((lagrima) => {
        const card = criarCardLagrima(lagrima);
        lagrimasContainer.appendChild(card);
      });
    });
}

// Chamada da função para buscar as lágrimas quando a página carregar
window.addEventListener("load", getLagrimas);
