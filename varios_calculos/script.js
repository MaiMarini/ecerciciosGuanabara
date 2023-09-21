var botao = document.getElementById("button");

botao.addEventListener("click", (evento) => {
  var n = prompt("Digite um número: ");
  var res = document.getElementById("result");

  //   abs = Math.abs(n);
  //   inte = Math.trunc(n);
  //   arr = Math.round(n);
  //   raiz = Math.sqrt(n);
  //   cub = Math.cbrt(n);
  //   quad = Math.pow(n, 2);
  //   cubo = Math.pow(n, 3);

  if (!isNaN(n)) {
    n = parseInt(n);
    res.innerHTML = `<p>O número a ser analisado aqui será o ${n}</p>
        <hr>
        <p>O seu valor absoluto é ${Math.abs(n)}</p>
        <p>A sua parte inteira é ${Math.trunc(n)}</p>
        <p>O valor inteiro mais próximo é ${Math.round(n)}</p>
        <p>A sua raiz quadrada é ${Math.sqrt(n)}</p>
        <p>A sua raiz cúbica é ${Math.cbrt(n)}</p>
        <p>O valor de ${n} <sup>2</sup> é ${Math.pow(n, 2)}</p>
        <p>O valor de ${n} <sup>3</sup> é ${Math.pow(n, 3)}</p>
        <p></p>`;
  } else {
    res.innerHTML = "Digite um número válido";
  }
});
