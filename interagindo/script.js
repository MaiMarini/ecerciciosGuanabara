const botao = document.querySelector("#button");

botao.addEventListener("click", (evento) => {
  let now = new Date();
  let res = document.querySelector("#result");
  res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${now}</mark></p>`;
});
