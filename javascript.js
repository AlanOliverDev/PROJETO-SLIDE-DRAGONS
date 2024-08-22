
document.addEventListener('DOMContentLoaded', () => {
    // Passo 1 - Pegar os elementos HTML dos botões
    const botoesCarrossel = document.querySelectorAll(".botao");
    const imagensCarrossel = document.querySelectorAll(".imagem");
    const informacoes = document.querySelectorAll(".informacoes");
    const totalSlides = imagensCarrossel.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index >= totalSlides) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = totalSlides - 1;
      } else {
        currentIndex = index;
      }
  
      // Passo 3 - Desmarcar o botão anteriormente selecionado
      const botaoSelecionado = document.querySelector(".botao.selecionado");
      if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
      }
  
      // Passo 4 - Marcar o botão clicado como selecionado
      botoesCarrossel[currentIndex].classList.add("selecionado");
  
      // Passo 5 - Esconder a imagem anteriormente selecionada
      const imagemAtiva = document.querySelector(".imagem.ativa");
      if (imagemAtiva) {
        imagemAtiva.classList.remove("ativa");
      }
  
      // Passo 6 - Mostrar a imagem correspondente ao botão clicado
      imagensCarrossel[currentIndex].classList.add("ativa");
  
      // Passo 7 - Esconder a informação do texto do dragão anteriormente selecionado
      const informacoesAtiva = document.querySelector(".informacoes.ativa");
      if (informacoesAtiva) {
        informacoesAtiva.classList.remove("ativa");
      }
  
      // Passo 8 - Mostrar a informação do texto do dragão referente ao botão
      informacoes[currentIndex].classList.add("ativa");
  
      // Move o carrossel para a posição correta
      const carrossel = document.querySelector('.carrossel');
      carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    // Passo 2 - Identificar o clique do usuário no botão
    botoesCarrossel.forEach((botao, indice) => {
      botao.addEventListener("click", () => {
        showSlide(indice);
      });
    });
  
    // Navegação com teclas de direção teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
      }
    });
  
    // Inicializa o carrossel
    showSlide(currentIndex);
  });
  
