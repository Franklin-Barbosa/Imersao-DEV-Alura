// PARTE 1: Lista de perguntas e respostas
const perguntas = [
    {
      pergunta: "Qual a extensão de um arquivo JavaScipt?",
      respostas: [
        { opcao: ".py", correto: false },
        { opcao: ".java", correto: false },
        { opcao: ".html", correto: false },
        { opcao: ".js", correto: true }
      ]
    },
    {
      pergunta: "Como você cria uma função anônima em JavaScript?",
      respostas: [
        { opcao: "function()", correto: false },
        { opcao: "() => {}", correto: true },
        { opcao: "function() {}", correto: false },
        { opcao: "function anonymous() {}", correto: false }
      ]
    },
    {
      pergunta: "Qual é o tipo de dado de 'null' em JavaScript?",
      respostas: [
        { opcao: "object", correto: true },
        { opcao: "null", correto: false },
        { opcao: "undefined", correto: false },
        { opcao: "boolean", correto: false }
      ]
    },
    {
      pergunta: "Como podemos converter uma string para um número em JavaScript?",
      respostas: [
        { opcao: "parseInt()", correto: true },
        { opcao: "toString()", correto: false },
        { opcao: "String()", correto: false },
        { opcao: "parseFloat()", correto: true }
      ]
    },
    {
      pergunta: "O que é uma promise em JavaScript?",
      respostas: [
        { opcao: "Uma função assíncrona", correto: false },
        { opcao: "Um objeto que representa a eventual conclusão ou falha de uma operação assíncrona", correto: true },
        { opcao: "Uma maneira de resolver funções", correto: false },
        { opcao: "Uma forma de sincronia no código", correto: false }
      ]
    },
    {
      pergunta: "Como você acessa o primeiro elemento de um array em JavaScript?",
      respostas: [
        { opcao: "array[0]", correto: true },
        { opcao: "array.first()", correto: false },
        { opcao: "array.firstElement()", correto: false },
        { opcao: "array(0)", correto: false }
      ]
    },
  ]
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Função para reiniciar o jogo
  function reiniciarJogo() {
    indiceAtual = 0;
    acertos = 0;
    conteudo.style.display = "flex";
    conteudoFinal.style.display = "none";
    carregarPergunta(); // Carrega a primeira pergunta
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  