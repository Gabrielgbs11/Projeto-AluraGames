

function alterarStatus (idDoJogo) {

    let cardDoJogo = document.getElementById(`game-${idDoJogo}`); 
    let botao = cardDoJogo.querySelector ('.dashboard__item__button');
    let imagem = cardDoJogo.querySelector('.dashboard__item__img')


     if (botao.textContent == 'Alugar') {

          botao.textContent = 'Devolver'; 
          botao.classList.add('dashboard__item__button--return'); 
          imagem. classList.add('dashboard__item__img--rented'); 

     }
        else{
            botao.textContent = 'Alugar'
            botao.classList.remove('dashboard__item__button--return');
            imagem. classList.remove('dashboard__item__img--rented'); 

        }

     
}
