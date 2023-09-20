const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let semanas = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  var date = new Date();
  let mes = date.getMonth();
  let diaSemana = date.getDay();

  res.innerHTML = `<p><strong>Dia:</strong> <mark>${date.getDate()}</mark></p>
    <p><strong>Mês:</strong> <mark>${meses[mes]}</mark></p>
    <p><strong>Ano:</strong> <mark>${date.getFullYear()}</mark></p>
    <p><strong>Dia da semana:</strong> <mark>${semanas[diaSemana]}</mark></p>
    <p><strong>Hora:</strong> <mark>${date.getHours()}</mark></p>
    <p><strong>Minutos:</strong> <mark>${date.getMinutes()}</mark></p>
    <p><strong>Segundos:</strong> <mark>${date.getSeconds()}</mark></p>
    `;
});
