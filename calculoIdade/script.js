const botao = document.querySelector("#button");
var rest = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  let nasc = prompt("Digite o ano do seu nascimento: ");
  let date = new Date();
  let anoAtual = date.getFullYear();
  if (!isNaN(nasc)) {
    rest.innerHTML = `<p>Quem nasceu em <strong>${nasc}</strong> completa <strong>${
      anoAtual - nasc
    }</strong> anos em <strong>${anoAtual}</strong>.</p>`;
  } else {
    rest.innerHTML = "<p><mark>Digite uma data válida</mark></p>";
  }
});
