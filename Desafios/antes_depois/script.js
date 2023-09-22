const botao = document.querySelector("#button");
var res;

botao.addEventListener("click", (evento) => {
  var num = parseInt(prompt("Digite um número inteiro: "));
  if (!isNaN(num)) {
    res = alert(
      `Antes do número ${num}, temos o número ${
        num - 1
      }. \nDepois do número ${num}, temos o número ${num + 1}.`
    );
  } else {
    res = alert("Digite um valor válido.");
  }
});
