const botao = document.querySelector("#button");

botao.addEventListener("click", (evento) => {
  var nome = prompt("Digite o nome do aluno: ");
  var n1 = prompt("Digite a primeira nota: ");
  var n2 = prompt("Digite a segunda nota: ");
  var res = document.querySelector("#h2");

  if (!isNaN(n1) && !isNaN(n2)) {
    res.innerHTML = `<p>Calculando a média final de ${nome}</p>
    <p>As notas obtidas foram ${parseInt(n1)} e ${parseInt(n2)}</p>
    <p>A média final será ${(parseInt(n1) + parseInt(n2)) / 2}`;
  } else {
    res.innerHTML = "Digite uma nota válida.";
  }
});
