const botao = document.querySelector("#button");

botao.addEventListener("click", (evento) => {
  let nome = prompt("Qual o seu nome?");
  document.getElementById("h2").innerHTML = `Olá, ${nome}! É um prazer te conhecer!`;
});
