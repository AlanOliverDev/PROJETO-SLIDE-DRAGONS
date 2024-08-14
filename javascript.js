/*
passo 1 - Pegar o elemento HTML dos botões: Você precisará encontrar uma maneira de
 selecionar os botões na página usando JavaScript.

passo 2 - Identificar o clique do usuário no botão: Isso envolve detectar
 quando o usuário clica em um botão específico.

passo 3 - Marcar o botão clicado como selecionado: Isso pode ser feito alterando 
a aparência visual do botão.

passo 4 - Desmarcar o botão selecionado anteriormente: Certifique-se de que
 apenas um botão esteja selecionado por vez.

passo 5 - Exibir a imagem correspondente ao botão clicado: Quando o usuário 
clicar em um botão, a imagem de fundo deve mudar.

passo 6 - Esconder a informação anteriormente selecionada: Se houver alguma 
informação exibida anteriormente, ela deve ser ocultada.

passo 7 - Mostrar a informação do dragão referente ao botão clicado: 
Isso provavelmente se refere a algum conteúdo específico relacionado a um dragão.

passo 8 - mostrar a informação do texto do dragão referente ao botão: 
*/

//passo 1 - dar um jeito de pegar os elementos HTML dos botões
    const botoesCarrossel = document.querySelectorAll(".botao");
    const imagensCarrossel = document.querySelectorAll(".imagem");
    const informacoes = document.querySelectorAll(".informacoes");

//passo 2 - dar um jeito de identificar o clique do usuário no botão
    botoesCarrossel.forEach((botao , indice)=> {
       botao.addEventListener("click", () => {
        //passo 3 - desmarcar o botão anteriormente selecionado

        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        
        //passo 4 - marcar o botão clicado como selecionado
        botao.classList.add("selecionado");

        //passo 5 - esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        
        //passo 6 - mostrar a imagem correspondente ao botão clicado
        imagensCarrossel[indice].classList.add("ativa");

       //passo 7 - esconder a informação do texto do dragão anteriormente selecionado
       const informacoesAtiva = document.querySelector(".informacoes.ativa");
      informacoesAtiva.classList.remove("ativa");

      //passo 8 - mostrar a informação do texto do dragão referente ao botão
      informacoes[indice].classList.add("ativa");

       })
    })


