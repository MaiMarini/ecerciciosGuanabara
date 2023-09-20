const botao = document.querySelector("#button");
var res = document.querySelector("#result");

botao.addEventListener("click", (evento) => {
  res.innerHTML = `<h2>Calculando...</h2>`;
  let n1 = prompt("Digite um número: ");
  let n2 = prompt("Digite outro número: ");
  let op = +prompt(
    `Valor informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir `
  );

  if (!isNaN(n1) && !isNaN(n2)) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    switch (op) {
      case 1:
        res.innerHTML = `<p>${n1} + ${n2} = <mark>${n1 + n2}</mark></p>`;
        break;
      case 2:
        res.innerHTML = `<p>${n1} - ${n2} = <mark>${n1 - n2}</mark></p>`;
        break;
      case 3:
        res.innerHTML = `<p>${n1} X ${n2} = <mark>${n1 * n2}</mark></p>`;
        break;
      case 4:
        res.innerHTML = `<p>${n1} / ${n2} = <mark>${n1 / n2}</mark></p>`;
        break;

      default:
        res.innerHTML += `<p>OPÇÃO INVÁLIDA!</p>`;
        break;
    }
  } else {
    res.innerHTML = "<p>Digite valores válidos.</p>";
  }
});
