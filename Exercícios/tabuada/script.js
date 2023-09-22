const send = document.querySelector("#submit");
var num = document.querySelector("#number");
var res = document.querySelector("#result");

send.addEventListener("click", (evento) => {
  var number = num.value;
  var mult = 0;

  res.innerHTML += `<h2>Tabuada do ${number}</h2>`;
  while (mult <= 10) {
    res.innerHTML += `<p>${number} X ${mult} = <strong>${
      number * mult
    }</strong></p>`;
    mult++;
  }

  evento.preventDefault(); //evitar auto refresh da página
});
