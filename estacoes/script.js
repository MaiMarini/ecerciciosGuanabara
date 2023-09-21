const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  var mes = prompt("Digite o mês por extenso: (Ex: Setembro)");
  var est;
  var check = false;

  switch (mes.toLocaleUpperCase()) {
    case "JANEIRO":
    case "FEVEREIRO":
    case "MARÇO":
      est = "INVERNO";
      break;

    case "ABRIL":
    case "MAIO":
    case "JUNHO":
      est = "PRIMAVERA";
      break;

    case "JULHO":
    case "AGOSTO":
    case "SETEMBRO":
      est = "VERÃO";
      break;

    case "OUTUBRO":
    case "NOVEMBRO":
    case "DEZEMBRO":
      est = "OUTONO";
      break;

    default:
      // est = "indefinida";
      check = true;
      break;
  }
  if (check == true) {
    res.innerHTML = `<p>A opção ${mes} é inválida.</p>`;
  } else {
    res.innerHTML = `<p>No mês de ${mes}, estamos na estação ${est}.</p>`;
  }
});
