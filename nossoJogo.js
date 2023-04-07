/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    alert("Bem vindo(a) ao jogo Black Jack.")
    let resposta = confirm("Quer iniciar o jogo?")
    let jogador = []
    let computador = []
    if (resposta === true){
      jogador.push(comprarCarta())
      alert("Sua carta é: "+jogador[jogador.length-1].texto)
      computador.push(comprarCarta())
      alert("Carta do computador: "+computador[computador.length-1].texto)
      while(confirm("Quer mais uma carta?") === true){
         jogador.push(comprarCarta())
         alert("Sua nova carta é: "+jogador[jogador.length-1].texto)
         computador.push(comprarCarta())
         alert("Carta nova do PC é: "+computador[computador.length-1].texto)
         if (jogador[0].texto == "A" && jogador[1].texto == "A"){
            jogador.shift()
            jogador.push(comprarCarta())
         }
         if(computador[0].texto == "A" && computador[1].texto == "A"){
            computador.shift()
            computador.push(comprarCarta())
         }
         }
    }else{
      alert("Fim do jogo!")
    }
   let jogadorTexto = []
   let computadorTexto = []

for (let i in jogador){
   jogadorTexto.push(jogador[i].texto)
   alert("Suas cartas: "+jogadorTexto)
}
for (let g = 0; g < computador.length; g++){
   computadorTexto.push(computador[g].texto)
   alert("Cartas do Computador: "+computadorTexto)
}
let totJogador = 0
let totPC = 0
for(let indice = 0; indice < jogador.length; indice++){  
   totJogador += jogador[indice].valor
}
for (let i = 0; i < computador.length;i++){
   totPC += computador[i].valor
}
alert("Cartas do jogador: "+jogadorTexto+"\t Pontos: "+totJogador+"\nCartas do Computador: "+computadorTexto+"\t Pontos: "+totPC)

if (totJogador > totPC && totJogador <= 21){
   alert("Você venceu!")
}else if(totJogador > 21 && totPC > 21){
   alert("Ultrapassou a pontuação limite! O ideal é pedir 2 cartas.")
}else if(totJogador === totPC && totJogador > 0 && totPC > 0){
   alert("Empate")
}else if(totPC > totJogador && totPC <= 21){
   alert("Computador venceu!")
}else if(totJogador > 21 && totPC <= 21){
   alert("Computador venceu!")
}else if(totPC > 21 && totJogador <= 21){
   alert("Você ganhou!")
}