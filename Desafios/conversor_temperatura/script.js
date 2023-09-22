const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var num = prompt("Digite um valor em graus Celsius (ºC): ");
  var k = num + 273.15;
  var f = (num * 9) / 5 + 32;

  if (!isNaN(num)) {
    num = parseFloat(num);
    var k = parseFloat(num + 273.15).toFixed(2);
    var f = parseFloat((num * 9) / 5 + 32).toFixed(2);
    res.innerHTML = `<h2>Convertendo ${num} ºC:</h2>`;
    res.innerHTML += `<p><strong>${k} ºK</strong> - Kelvin </p>
    <p><strong>${f} ºF</strong> - Fahrenheit </p>`;
  } else {
    res.innerHTML = "Digite valores válidos.";
  }
});
