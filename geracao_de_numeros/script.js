const botao1 = document.querySelector("#b1");
const botao2 = document.querySelector("#b2");
var res = document.querySelector("#result");

botao1.addEventListener("click", (evento) => {
  var n = 1 + Math.floor(Math.random() * 99);
  res.innerHTML += `<p>Acabei de pensar no número ${n}</p>`;
});
botao2.addEventListener("click", (evento) => {
  res.innerHTML =
    "<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>";
});
