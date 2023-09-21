const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var n = prompt("Digite um numero: ");

  if (!isNaN(n)) {
    n = parseInt(n);
    var tipo;
    if (n % 2 == 0) {
      tipo = "PAR";
    } else {
      tipo = "ÍMPAR";
    }
    res.innerHTML = `<p>O número ${n} que foi digitado é <strong> ${tipo} </strong>.</p>`;
  } else {
    res.innerHTML = "<p><mark>Digite um número válido.</mark></p>";
  }
});
