function jogar () {
    id = prompt("Qual a sua idade?");
    if (id < 18) {
      alert("Sinto muito, você não tem idade para jogar!");
    }
    if (id >= 18) {
      escolhaJogador = prompt("Escolha entre: 1-🪨Pedra, 2-📄Papel ou 3-✂️Tesoura");
      
      escolhaPc = Math.floor(Math.random() * 3) + 1;
      
      if (escolhaJogador == escolhaPc) {
        alert("Deu empate");
      }
      if (escolhaJogador == 1) {
        if (escolhaPc == 2) {
          // Jogador: Pedra, Computador: Papel ---> Computador Vence
          alert("A escolha do Computador foi Papel, Você Perdeu!");
        }
        if (cpu == 3) {
          // Jogador: Pedra, Computador: Tesoura ---> Computador Perde
          alert("A escolha do Computador foi Tesoura, Você Ganhou!");
        }
      }
      if (escolhaJogador == 2) {
        if (escolhaPc == 1) {
          // Jogador: Papel, Computador: Pedra ---> Computador Perde
          alert("A escolha do Computador foi Pedra, Você Ganhou!");
        }
        if (escolhaPc == 3) {
          // Jogador: Papel, Computador: Tesoura ---> Computador Perde
          alert("A escolha do Computador foi Tesoura, Você Perdeu!");
        }
      }
      if (escolhaJogador == 3) {
        if (escolhaPc == 1) {
          // Jogador: Tesoura, Computador: Pedra ---> Computador Vence
          alert("A escolha do Computador foi Pedra, Você Perdeu!");
        }
        if (escolhaPc == 2) {
          // Jogador: Tesoura, Computador: Papel ---> Computador Perde
          alert("A escolha do Computador foi Papel, Você Ganhou!");
        }
      }
      alert ("Escolha do Computador: "+ escolhaPc);
    }
  }
  