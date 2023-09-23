const botao = document.querySelector("#button");
var res = document.querySelector("#result");
var date = new Date();
var cotacoes = {};
const moedas = ["BRL-USD", "BRL-EUR", "BRL-JPY"];

//definindo os parametros de um request
const cotacaoRequest = new Request(
  `https://economia.awesomeapi.com.br/last/${moedas}`,
  {
    mthos: "GET",
    headers: {
      "Accept-Charset": "utf-8",
      Accept: "application/json",
    },
  }
);

//enviando a requisição
fetch(cotacaoRequest)
  //após resposta da requisição executa:
  .then((response) => {
    if (response.status == 200) {
      return response.json();
    }
  })
  //após conversão da resposta em json executa:
  .then((response) => {
    Object.entries(response).forEach((key, value) => {
      cotacoes[key[0]] = {
        name: key[1]["name"],
        bid: key[1]["bid"],
        codein: key[1]["codein"],
      };
    });
  });

//definindo o evento
botao.addEventListener("click", (evento) => {
  var real = prompt("Digite o valor em reais : ");

  var mensagem = "";

  Object.entries(cotacoes).forEach((key, value) => {
    var taxaConv = key[1]["bid"] * real;
    var result = taxaConv.toLocaleString("pt-BR", {
      style: "currency",
      currency: key[1]["codein"],
    });
    var realSTR = parseFloat(real).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    mensagem += `<h2>Cotação ${
      key[1]["name"]
    } do  dia ${date.getDate()} do mês ${date.getMonth()} é R$ ${
      key[1]["bid"]
    }</h2>
      <p>O valor <strong>${realSTR}</strong> convertido para ${
      key[1]["name"].split("/")[1]
    } é igual a <strong>${result}</strong>.`;

    res.innerHTML = mensagem;
  });
});
