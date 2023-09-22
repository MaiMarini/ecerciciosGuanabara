const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var n1 = prompt("Digite um número: ");
  var n2 = prompt("Digite outro número: ");
  if (!isNaN(n1) && !isNaN(n2)) {
    if (n1 > n2) {
      res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}</p>`;
    } else if (n2 > n1) {
      res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}</p>`;
    } else {
      res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, os valores são iguais</p>`;
    }
  } else {
    res.innerHTML = "<p>Digite números válidos</p>";
  }
});
