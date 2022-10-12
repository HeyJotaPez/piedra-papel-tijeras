let puntajeJugador = 0;
let puntajeCpu = 0;
let closeBtn;
const puntajeJugador_span = document.getElementById("puntaje-jugador");
const puntajeCpu_span = document.getElementById("puntaje-cpu");
// const scoreBoard_div = document.getElementById(".score-board")
const reiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById ("resultado")
const modal = document.querySelector(".modal");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijeras_div = document.getElementById("tijeras");


function getdecisionCpu() {
  const choices = ['piedra', 'papel', 'tijeras'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(decisionJugador, decisionCpu) {
  puntajeJugador++;
  puntajeJugador_span.innerHTML = puntajeJugador;
  puntajeCpu_span.innerHTML = puntajeCpu;
  resultado.innerHTML = `<span class="cerrar"></span> <h1 class="text-win">¡Ganaste!</h1> <p>La CPU eligió <strong>${decisionCpu}</strong></p>`;
  modal.style.display = 'block';
}

function lose(decisionJugador, decisionCpu){
  puntajeCpu++;
  puntajeJugador_span.innerHTML = puntajeJugador;
  puntajeCpu_span.innerHTML = puntajeCpu;
  resultado.innerHTML = `<span class="cerrar"></span> <h1 class="text-lose">¡Perdiste!</h1> <p>La CPU eligió <strong>${decisionCpu}</strong></p>`; 
  modal.style.display = 'block'
}

function draw(decisionJugador, decisionCpu){
  puntajeJugador_span.innerHTML = puntajeJugador;
  puntajeCpu_span.innerHTML = puntajeCpu;
  resultado.innerHTML = `<span class="cerrar"></span> <h1>Empate</h1> <p>Ambos eligieron <strong>${decisionCpu}</strong></p>`;
  modal.style.display = 'block'
}


function play(decisionJugador) {
  const decisionCpu = getdecisionCpu();
  switch (decisionJugador + decisionCpu) {
    case 'piedratijeras':
    case 'papelpiedra':
    case 'tijeraspapel':
      win(decisionJugador, decisionCpu);
      break;
    case 'piedrapapel':
    case 'papeltijeras':
    case 'tijeraspiedra':
      lose(decisionJugador, decisionCpu);
      break;
    case 'piedrapiedra':
    case 'papelpapel':
    case 'tijerastijeras':
      draw(decisionJugador, decisionCpu);
      break;
  }
}


function main() {
  piedra_div.addEventListener('click', function() {
    play('piedra');
  })
  
  papel_div.addEventListener('click', function() {
    play('papel');
  })
  
  tijeras_div.addEventListener('click', function() {
    play('tijeras');
  })
}


function clearModal(e){
  closeBtn = document.querySelector('.cerrar');

  if(e.target == modal) {
    modal.style.display = "none"
  }
  else if(closeBtn){
    closeBtn.addEventListener('click', function(){
      modal.style.display = "none"
    });
  }
}


function restartGame(){
  puntajeJugador = 0;
  puntajeCpu = 0;
  puntajeJugador_span.innerHTML = puntajeJugador;
  puntajeCpu_span.innerHTML = puntajeCpu;
}

reiniciar.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();