document.getElementById('btn-sortear').addEventListener('click', function() {
    const filmes = document.querySelectorAll('.sorteio');
    
    if (filmes.length === 0) {
        alert('Nenhum filme encontrado na página!');
        return;
    }

    /* Limpa o destaque se o usuário clicar em sortear mais de uma vez */
    filmes.forEach(filme => {
        filme.style.boxShadow = '';
        filme.style.transform = '';
        filme.style.zIndex = '1';
    });

    /* Sorteia o filme */
    const indiceSorteado = Math.floor(Math.random() * filmes.length);
    const filmeVencedor = filmes[indiceSorteado];

    /* Aplica o destaque no filme sorteado */
    filmeVencedor.style.transform = 'scale(1.1)';
    filmeVencedor.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
    filmeVencedor.style.zIndex = '10';

    /* Rola a tela até o filme */
    filmeVencedor.scrollIntoView({ behavior: 'smooth', block: 'center' });

    /* Pega o nome do filme e exibe o alerta */
    const tituloVencedor = filmeVencedor.querySelector('.titulo').innerText;
    
    setTimeout(() => {
        alert(`O filme escolhido foi: ${tituloVencedor}!`);
    }, 500);
});
