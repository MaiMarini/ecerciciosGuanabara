const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var num = prompt("Digite um valor em metros (m): ");
  var km = num / 1000;
  var hec = num / 100;
  var decm = num / 10;
  var deci = num * 10;
  var cm = num * 100;
  var mm = num * 1000;

  if (!isNaN(num)) {
    num = parseFloat(num);
    res.innerHTML = `<h2>Convertendo ${num}...</h2>`;
    res.innerHTML += `<p>${km} quilomêtros </p>
    <p>${hec} hectômetros </p>
    <p>${decm} decâmetros </p>
    <p>${deci} decímetros </p>
    <p>${cm} centímetros </p>
    <p>${mm} milímetros </p>`;
  } else {
    res.innerHTML = "Digite valores válidos.";
  }
});
