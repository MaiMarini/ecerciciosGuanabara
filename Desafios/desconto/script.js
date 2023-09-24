const botao = document.querySelector("#button");
const res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var obj = prompt("Qual o produto comprado? ");
  var val = prompt("Qual o valor do produto? ");
  var desc = prompt("Qual o valor do desconto? ");

  if (!isNaN(val) && !isNaN(desc)) {
    var valT = parseFloat(val);
    var result = val * (desc / 100);
    var price = val - result;
    res.innerHTML = `<h2>Calculando o desconto de ${desc}% para o produto ${obj}</h2>`;
    res.innerHTML += `<p>O valor do produto é ${valT.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}</p>
        <p>Você recebeu ${desc}% de desconto: ${result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}</p>
        <p>Você pagará ${price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })} no produto ${obj}</p>`;
  } else {
    res.innerHTML = "Digite valores válidos";
  }
});
