const send = document.querySelector("#submit");
var res = document.querySelector("#result");
var num = document.querySelector("#number");

send.addEventListener("click", (evento) => {
  var n = 0;
  var value = num.value;
  res.innerHTML += `<h2>Contando de 0 até ${value}</h2>`;

  while (n <= value) {
    res.innerHTML += `${n} &#x1F449;`;
    n++;
  }
  res.innerHTML += ` &#x1F3C1;`;
  evento.preventDefault(); //evitar auto refresh da página
});
