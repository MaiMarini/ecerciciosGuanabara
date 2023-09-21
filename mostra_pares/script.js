const botao = document.querySelector("#button");
var res = document.querySelector("#result");

// botao.addEventListener("click", (evento) => {
//   var num = 0;
//   res.innerHTML += "<h2>Contando...</h2>";

//   while (num <= 10) {
//     if (num % 2 == 0) {
//       res.innerHTML += ` <mark>${num}</mark> `;
//     } else {
//       res.innerHTML += ` &#x1F449 `;
//     }
//     num++;
//   }
// });

botao.addEventListener("click", (evento) => {
  var num = 0;
  res.innerHTML += "<h2>Contando...</h2>";

  while (num <= 10) {
    res.innerHTML += ` &#x1F449 <mark>${num}</mark> `;
    num += 2;
  }
});
