document.getElementById('btn-sortear').addEventListener('click', function() {
    const filmes = document.querySelectorAll('.sorteio');

    /* Limpa o destaque se o usuário clicar em sortear mais de uma vez */
    filmes.forEach(filme => {
        filme.style.boxShadow = '';
        filme.style.transform = '';
        filme.style.zIndex = '1';
    });

    /* Sorteia o filme */
    const indiceSorteado = Math.floor(Math.random() * filmes.length);
    const filmeVencedor = filmes[indiceSorteado];

    /* Pega o nome do filme e exibe o alerta */
    const tituloVencedor = filmeVencedor.querySelector('.titulo').innerText;
    
    setTimeout(() => {
        alert(`O filme escolhido foi: ${tituloVencedor}!`);
    }, 500);
});
