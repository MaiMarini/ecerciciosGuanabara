const b1 = document.querySelector("#button1");
const b2 = document.querySelector("#button2");
const b3 = document.querySelector("#button3");
var mensagem;

b1.addEventListener("click", (evento) => {
  mensagem = alert("Você clicou no 1º botão.");
});

b2.addEventListener("click", (evento) => {
  mensagem = alert("Você clicou no 2º botão.");
});

b3.addEventListener("click", (evento) => {
  mensagem = alert("Você clicou no 3º botão.");
});
