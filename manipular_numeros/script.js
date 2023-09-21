const botao = document.querySelector("#button");

botao.addEventListener("click", (evento) => {
  var n = prompt("Digite um número: ");
  var res = document.querySelector("#h2");

  if (!isNaN(n)) {
    res.innerHTML = `O dobro de ${n} é ${n * 2} e a metade é ${n / 2}`;
  } else {
    res.innerHTML = `${n} não é um número válido`;
  }
});
// function calcular() {
//   var number = Number(window.prompt("Digte um número: "));
//   var res = document.getElementById("h2");

//   res.innerHTML = `O dobro de ${number} é ${number * 2} e a metade é ${
//     number / 2
//   }`;
// }
// onclick(calcular());
