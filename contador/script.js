const bt1 = document.querySelector("#b1");
const bt2 = document.querySelector("#b2");
var res = document.querySelector("#result");
var contador = 0;

bt1.addEventListener("click", (evento) => {
  contador++;
  res.innerHTML = `<p> O contador está com <mark>${contador}</mark> cliques. </p>`;
});

bt2.addEventListener("click", (evento) => {
  contador = 0;
  res.innerHTML = `<p> O contador está com <mark>${contador}</mark> cliques. </p>`;
});
