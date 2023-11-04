
// Função para criar um elemento de card para uma lágrima
function criarCardLagrima(lagrima) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <h3>${lagrima.nome}</h3>
        <p>Categoria: ${lagrima.categoria}</p>
        <p>Autor: ${lagrima.autor}</p>
    `;
    
    return card;
}

// Função para exibir as lágrimas na página
function exibirLagrimas() {
    let listLagrimas = localStorage.getItem('lagrimas');
    const lagrimas = JSON.parse(listLagrimas);
    const lagrimasContainer = document.getElementById('lagrimas-container');
    
    lagrimas.forEach((lagrima) => {
        const card = criarCardLagrima(lagrima);
        lagrimasContainer.appendChild(card);
    });
}

// Chamada da função para exibir as lágrimas quando a página carregar
window.addEventListener('load', exibirLagrimas);
