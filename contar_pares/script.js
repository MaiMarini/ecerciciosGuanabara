const botao = document.querySelector("#button");
var res = document.querySelector("#result");
var num = 0;

// function parImpar() {
//   if (num % 2 === 0) {
//     res.innerHTML += `<mark>${num}</mark> &#x1F449;`;
//   } else {
//     res.innerHTML += `${num} &#x1F449;`;
//   }
// }

// botao.addEventListener("click", (evento) => {
//   res.innerHTML += "<h2>Contando...</h2>";
//   while (num < 10) {
//     num++;
//     parImpar();
//   }
// });

botao.addEventListener("click", (evento) => {
  res.innerHTML += "<h2>Contando...</h2>";
  while (num <= 10) {
    if (num % 2 === 0) {
      res.innerHTML += `<mark>${num}</mark> &#x1F449;`;
    } else {
      res.innerHTML += `${num} &#x1F449;`;
    }
    num++;
  }
});
