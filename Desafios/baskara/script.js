const botao = document.querySelector("#button");
const res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var a = prompt("Qual o valor de a? ");
  var b = prompt("Qual o valor de b? ");
  var c = prompt("Qual o valor de c?? ");

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    var delta = b * b - 4 * a * c;
    res.innerHTML = `<p>A equação é: <strong>${a}x² + ${b}x + ${c} = 0</strong></p>
    <p>O calcula realizado será <strong> &#916; = ${b}² - 4 . ${a} . ${c}</strong></p>
    <p>O valor calculado é <strong> &#916; = ${delta}</strong></p>`;
  }
});
