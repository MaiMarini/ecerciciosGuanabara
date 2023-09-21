const send = document.querySelector("#submit");
var inicio = document.querySelector("#number1");
var final = document.querySelector("#number2");
var res = document.querySelector("#result");

send.addEventListener("click", (evento) => {
  var value1 = inicio.value;
  var value2 = final.value;

  res.innerHTML += `<h2>Contando de ${value1} até ${value2}</h2>`;

  if (value1 < value2) {
    while (value1 <= value2) {
      res.innerHTML += `${value1} &#x1F449;`;
      value1++;
    }
  } else {
    while (value1 >= value2) {
      res.innerHTML += `${value1} &#x1F449;`;
      value1 = value1 - 1;
    }
  }

  res.innerHTML += ` &#x1F3C1;`;
  evento.preventDefault(); //evitar auto refresh da página
});
