const formulario = document.getElementById("formulario-tabuada");
const numeroInput = document.getElementById("numero");
const tituloResultado = document.getElementById("titulo-resultado");
const listaTabuada = document.getElementById("lista-tabuada");

function gerarTabuada(numero) {
  tituloResultado.textContent = `Tabuada do ${numero}`;
  listaTabuada.innerHTML = "";

  for (let multiplicador = 1; multiplicador <= 10; multiplicador += 1) {
    const item = document.createElement("li");
    item.textContent = `${numero} x ${multiplicador} = ${numero * multiplicador}`;
    listaTabuada.appendChild(item);
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const numero = Number(numeroInput.value);
  gerarTabuada(numero);
});

gerarTabuada(Number(numeroInput.value));
