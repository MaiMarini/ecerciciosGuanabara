const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var nome = prompt("Digite o nome do aluno: ");
  var n1 = prompt("Digite a primeira nota: ");
  var n2 = prompt("Digite a segunda nota: ");
  var media = (parseFloat(n1) + parseFloat(n2)) / 2;

  if (!isNaN(n1) && !isNaN(n2)) {
    res.innerHTML = `<p> Calculando a média final de ${nome}.</p>
        <p> As notas obtidas foram ${n1} e ${n2}.</p>
        <p> A média final será ${media}.`;
    if (media >= 5) {
      res.innerHTML += "A mensagem que temos é: <mark>Meus parabéns!</mark>";
    } else {
      res.innerHTML +=
        "A mensagem que temos é: <mark>Estude um pouco mais!</mark>";
    }
  } else {
    res.innerHTML = "<p><strong>Insira notas válidas</strong></p>";
  }
});
