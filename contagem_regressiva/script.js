const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var num = 20;
  res.innerHTML += "<h2>Contando...</h2>";

  while (num >= 0) {
    res.innerHTML += ` ${num} &#x1F449 `;
    num = num - 1;
  }
  res.innerHTML += ` &#x1F3C1;`;
});
