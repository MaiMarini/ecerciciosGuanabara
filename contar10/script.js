const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  res.innerHTML += "<h2>Contando...</h2>";
  var num = 1;
  while (num <= 10) {
    res.innerHTML += `${num} &#x1F449;`;
    num++;
  }
});
