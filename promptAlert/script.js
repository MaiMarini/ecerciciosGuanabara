const botao = document.querySelector("#button");

botao.addEventListener("click", (evento) => {
  let nome = prompt("Qual o seu nome?");
  alert(`Olá, ${nome}! É um prazer te conhecer!`);
});
