// Import stylesheets
import './style.css';

// Função para organizar parenteses.
function conserta(str) {
  var balanceada = str,
      naoAbertos = 0,
      qtd = 0;
  
  for (var c of str) {
    if ( c == '(') {
      qtd++;
    }
    if (c == ')') {
      if (qtd == 0) {
        naoAbertos++;
        balanceada = '(' + balanceada
      }
      else {
        qtd--;
      }
    }
  }
  for (var i = 0; i < qtd; i++) {
    balanceada += ')';
  }
  return balanceada;
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${conserta(')(')}</h1>`;