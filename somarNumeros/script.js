// const botao = document.querySelector("#button");

// botao.addEventListener("click", (evento) => {
//   var n1 = prompt("Digite o primeiro número: ");
//   var n2 = prompt("digite o segundo número: ");
//   var res = document.getElementById("h2");

//   res.innerHTML = `A soma dos números é: ${parseInt(n1) + parseInt(n2)}`;
// });

const botao = document.querySelector("#button");

botao.addEventListener("click", (evento) => {
  var n1 = prompt("Digite o primeiro número: ");
  var n2 = prompt("digite o segundo número: ");
  var res = document.getElementById("h2");

  if (!isNaN(n1) && !isNaN(n2)) {
    res.innerHTML = `A soma dos números é: ${parseInt(n1) + parseInt(n2)}`;
  } else {
    res.innerHTML = "Número inválido";
  }
});
