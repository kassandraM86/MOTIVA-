console.log("Main.js carregado!");

// Função para adicionar evento de clique no botão "INSCREVA-SE"
document.querySelector('.btn-inscreva-se').addEventListener('click', function() {
    alert("Obrigado por se inscrever! Fique atento às novidades!");
});

// Função para adicionar evento de clique no botão "LEIA MAIS"
document.querySelector('.btn-motiva').addEventListener('click', function() {
    alert("Em breve mais conteúdos motivacionais!");
});

// Adiciona funcionalidade à barra de pesquisa
document.querySelector('.search-bar input').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const text = card.querySelector('p').textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = ''; // Mostra o card
        } else {
            card.style.display = 'none'; // Esconde o card que não combina
        }
    });
});
