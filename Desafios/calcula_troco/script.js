const botao = document.querySelector("#button");
var res;
botao.addEventListener("click", (evento) => {
  var prod = prompt("Qual o produto você está comprando? ");
  var price = prompt(
    `Qual o valor do ${prod} que você está comprando? `
  ).toLocaleString();
  var pagto = prompt(
    `Qual o valor você está entregando para pagar o produto? `
  ).toLocaleString();

  if (!isNaN(price) && !isNaN(pagto)) {
    res = alert(
      `Você comprou ${prod} que custou ${price}. \nDeu ${pagto} e vai receber ${
        pagto - price
      } de troco. `
    );
  } else {
    res = alert("Digite valores válidos.");
  }
});
