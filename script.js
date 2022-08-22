let tempo = 0;
document.querySelector(".tempo-marcadores").innerHTML = tempo;
function contarTempo() {
  tempo++;
  document.querySelector(".tempo-marcadores").innerHTML = tempo;
}

let numeroCartas = prompt(
  "Com quantas cartas quer jogar? (de 4 à 14 e um número par)"
);
while (numeroCartas % 2 !== 0 || numeroCartas > 14 || numeroCartas < 4) {
  alert("Você digitou algo inválido!");
  numeroCartas = prompt(
    "Com quantas cartas quer jogar? (de 4 à 14 e um número par)"
  );
}
const id_tempo = setInterval(contarTempo, 1000);

//   FAZENDO ARRAY DE CARTAS
const arrayDeCartas = [];
let contador = 0;
while (contador < numeroCartas / 2) {
  let cartas = document.querySelector(`.card${contador}`).innerHTML;
  arrayDeCartas.push(cartas);
  arrayDeCartas.push(cartas);
  contador++;
}

// EMBARALHANDO ARRAYs
function comparador() {
  return Math.random() - 0.5;
}
arrayDeCartas.sort(comparador);

// COLOCANDO AS CARTAS NA ARRAY PARA ADD
let cartasMostradas = document.querySelector(".cards");
cartasMostradas.innerHTML = "";
let indice = 0;
while (indice < arrayDeCartas.length) {
  cartasMostradas.innerHTML =
    cartasMostradas.innerHTML +
    `<li class="card x" onclick="virarCarta(this)">${arrayDeCartas[indice]}</li>`;
  indice++;
}

arrayDeCartas.sort(comparador);
function comparador() {
  return Math.random() - 0.5;
}
comparador();

let numeroJogadas = 0;
document.querySelector(".jogadas-marcadores").innerHTML = numeroJogadas;

let conteudos = [];
let medidaFinal = document.querySelector(".card-back");
function virarCarta(cartaClicada) {
  numeroJogadas++;
  document.querySelector(".jogadas-marcadores").innerHTML = numeroJogadas;
  function alterarClasses() {
    cartaClicada.querySelector(".card-back").classList.add("hiden");
    cartaClicada.querySelector(".card-front").classList.remove("hiden");
  }
  setTimeout(alterarClasses, 200);
  cartaClicada.classList.add("marcador", "virar");
  conteudos.push(cartaClicada);
  if (conteudos[1] !== undefined) {
    setTimeout(verificarSeAcertou, 1000);
  }
}

function verificarSeAcertou() {
  if (conteudos[0].innerHTML !== conteudos[1].innerHTML) {
    let marcados = document.querySelectorAll(".marcador");
    marcados[0].classList.remove("marcador", "virar");
    marcados[1].classList.remove("marcador", "virar");
    function alterarClasses() {
      marcados[0].querySelector(".card-back").classList.remove("hiden");
      marcados[0].querySelector(".card-front").classList.add("hiden");
      marcados[1].querySelector(".card-back").classList.remove("hiden");
      marcados[1].querySelector(".card-front").classList.add("hiden");
    }
    setTimeout(alterarClasses, 200);
  } else {
    let marcados = document.querySelectorAll(".marcador");
    marcados[0].classList.add("desabilitar");
    marcados[1].classList.add("desabilitar");
    marcados[1].classList.remove("x", "marcador");
    marcados[0].classList.remove("x", "marcador");
    console.log(document.querySelector(".cards .x"));
    if (document.querySelector(".cards .x") === null) {
      clearInterval(id_tempo);
      alert(
        `Você ganhou em ${numeroJogadas} jogadas e em ${tempo} segundos. Parabéns!`
      );
      const jogarNovamente = prompt(
        "Deseja jogar novamente? Digite sim ou não: "
      );
      if (jogarNovamente === "sim") {
        window.location.reload();
      }
    }
  }
  conteudos = [];
  marcados = [];
}
