const botao = document.querySelector("#button");

botao.addEventListener("click", (evento) => {
  var nome = prompt("Digite seu nome: ");
  var idade = prompt(`Olá, ${nome}! Quantos anos você tem?`);

  var res = alert(`Acabei de conhecer ${nome}, que tem ${idade} de idade!`);
});
