const send = document.querySelector("#submit");
var num = document.querySelector("#number");
var res = document.querySelector("#result");

send.addEventListener("click", (evento) => {
  var number = num.value;
  var fat = 1;

  if (number <= 21) {
    res.innerHTML += `<h2>Calculando ${number}!</h2>`;
    while (number > 1) {
      res.innerHTML += `${number} x `;
      fat = fat * number;
      number--;
    }
    res.innerHTML += `1 x = <strong>${fat.toLocaleString("pt-BR")}</strong>`;
  } else {
    res.innerHTML += `<h2>Valor inválido!</h2>`;
  }

  evento.preventDefault(); //evitar auto refresh da página
});
