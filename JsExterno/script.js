var res = document.getElementById("result");
var a1 = document.getElementById("b1");
var a2 = document.getElementById("b2");
var a3 = document.getElementById("b3");
var a4 = document.getElementById("b4");

a1.addEventListener("click", (evento) => {
  res.innerHTML += `<p> Clicou no primeiro botão. </p>`;
});
a2.addEventListener("click", (evento) => {
  res.innerHTML += `<p> Clicou no segundo botão. </p>`;
});
a3.addEventListener("click", (evento) => {
  res.innerHTML += `<p> Clicou no terceiro botão. </p>`;
});
a4.addEventListener("click", (evento) => {
  res.innerHTML += `<p> Clicou no quarto botão. </p>`;
});
// function a1() {
//   res.innerHTML += `<p> Clicou no primeiro botão. </p>`;
// }
// function a2() {
//   res.innerHTML += `<p> Clicou no segundo botão. </p>`;
// }
// function a3() {
//   res.innerHTML += `<p> Clicou no terceiro botão. </p>`;
// }
// function a4() {
//   res.innerHTML += `<p> Clicou no quarto botão. </p>`;
// }
