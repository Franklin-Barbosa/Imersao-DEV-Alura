function escolherPersonagens() {
    let personagem = ["", "", ""]
    let viloes = ["", "", ""]
    let poderPersonagens = 0
    let poderViloes = 0
  
    alert("Bem-vindo ao jogo! Monte seu time de Herry Potter.")
  
    const personagensDisponiveis = [
      "Harry", "Hermione", "Dumbledore", "Ron", "Luna", "Dobby",
      "Minerva", "Sibila", "Fred", "Jorge", "Neville", "Sirius"
    ]
  
    // usuário
    for (let i = 0; i < 3; i++) {
      let escolhaPersonagem
      do {
        escolhaPersonagem = prompt(
          `Digite o nome do seu Personagem ${i + 1}:\nOpções: ${personagensDisponiveis.join(", ")}`
        )
        if (!personagensDisponiveis.includes(escolhaPersonagem)) {
          alert("Nome inválido! Por favor, digite exatamente como está escrito na lista.")
        }
      } while (!personagensDisponiveis.includes(escolhaPersonagem))
  
      personagem[i] = escolhaPersonagem;
      poderPersonagens += Math.floor(Math.random() * 30) + 1
    }
  
    const possiveisViloes = [
      "Voldemort", "Bellatrix", "Dolores",
      "Lucio Malfoy", "Draco Malfoy", "Pedro Pettigrew"
    ]
  
    // computador
    for (let i = 0; i < 3; i++) {
      let indiceAleatorio = Math.floor(Math.random() * possiveisViloes.length)
      viloes[i] = possiveisViloes[indiceAleatorio]
      poderViloes += Math.floor(Math.random() * 30) + 1
    }
  
    alert(
      `Vamos a batalha! 
      Seus Personagens: ${personagem.join(", ")}
      Vilões: ${viloes.join(", ")}`
    )
  
    if (poderPersonagens > poderViloes) {
      alert(
        `Parabéns!!! Seu time é o Vencedor! 🏆 
        Poder do seu time: ${poderPersonagens}  
        Poder do time dos Vilões: ${poderViloes}`
      )
    } else if (poderPersonagens < poderViloes) {
        alert(
          `Que pena, Seu time perdeu. 😢 
          Poder do seu time: ${poderPersonagens}  
          Poder do time dos Vilões: ${poderViloes}`
        )
    } else {
        alert(
          `Que coisa! Os dois times têm a mesma quantidade de poder! 🤯 
          Poder do seu time: ${poderPersonagens}  
          Poder do time dos Vilões: ${poderViloes}`
        )
    }
    alert("Fim de jogo!")
  }
  