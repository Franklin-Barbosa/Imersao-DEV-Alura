function jogar(){
    rodada = 1
    while(rodada <=5){
      console.log("Nível: "+ rodada)
      escolhaJogador = prompt( "Nível: "+ rodada + ". Escolha um vidro: 1, 2 ou 3")
      
      if (escolhaJogador < 1 || escolhaJogador > 3) {
        alert("Escolha inválida! Por favor, escolha entre 1, 2 ou 3.");
        continue; // Volta para o início do loop
      }
      
      pisoQuebrado = Math.floor(Math.random()*3)+1; // Piso aleatorio
      
      if( escolhaJogador == pisoQuebrado){
        alert("O vidro quebrou, você perdeu!")
    
        rodada=1000;
      }
      else{
        alert("Você passou para o próximo nível! O piso quebrado era: " + pisoQuebrado)
      }
      rodada = rodada + 1
    }
    if(rodada == 6){
      alert("PARABÉNSS!!! Você venceu o jogo.")
    }
  }
  