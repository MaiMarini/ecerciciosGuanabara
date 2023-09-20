const botao = document.querySelector("#button");
var res = document.querySelector("#result");
var sort = 1 + Math.floor(Math.random() * 99);

botao.addEventListener("click", (evento) => {
  var num = prompt("Digite seu palpite: ");

  if (!isNaN(num)) {
    if (num > sort) {
      res.innerHTML += `<p>Você falou ${num}. Meu número <strong>é MAIOR!</strong></p>`;
    } else if (num < sort) {
      res.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MENOR!</strong></p>`;
    } else {
      document.getElementById("button").style.visibility = "hidden";
      res.innerHTML = `<p> <strong>PARABÉNS!</strong>Você acertou! Eu tinha sorteado o valor ${sort}!</p>`;
    }
  } else {
    res.innerHTML += `${num} não é um número válido`;
  }
});
console.log(sort);
