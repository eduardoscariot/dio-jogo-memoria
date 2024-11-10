const emojis = [
    "👮",
    "👮",
    "👩‍🚀",
    "👩‍🚀",
    "👩‍🍳",
    "👩‍🍳",
    "👨‍💻",
    "👨‍💻",
    "👩‍🚒",
    "👩‍🚒",
    "👷‍♀️",
    "👷‍♀️",
    "👩‍⚖️",
    "👩‍⚖️",
    "👨‍⚕️",
    "👨‍⚕️",
  ];
  let openCards = [];
  
  // Sortear posição dos emojis
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  // Criar os elementos DOM com os emojis do jogo
  for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
  }
  
  function handleClick() {
    // Quando a quantidade de cards abertos for menor do que 2, adiciona no vetor para futura comparação
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
    // Quando o total de cards abertos for dois, chama o procedimento para validar os cards
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  }
  
  // Fazer a verificação dos cards abertos
  function checkMatch() {
    // Caso os cards forem iguais, vai adicionar a classe de boxMatch
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      // Caso forem diferentes, vai remover a classe de boxOpen para ocultar os cards novamente
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
    // Sempre limpar o vetor para que uma nova verificação possa ser feitas com os proximos cards abertos
    openCards = [];
    
    // Quando finalizar, vai apresentar uma mensagem parabenizando o usuário.
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Parabéns!!! Você venceu o jogo da memória das profissões.\nPara iniciar um novo jogo, basta clicar em Reset Game.");
    }
  }