var canvas = document.getElementById("tabuleiro");
var ctx = canvas.getContext("2d");

var tamanho = 50;
var linhas = 8;
var colunas = 8;

// Desenha o tabuleiro
for (var linha = 0; linha < linhas; linha++) {
  for (var coluna = 0; coluna < colunas; coluna++) {
    if ((linha + coluna) % 2 === 0) {
      ctx.fillStyle = "#ffffff"; // casa clara
    } else {
      ctx.fillStyle = "#808080"; // casa escura (cinza)
    }
    ctx.fillRect(coluna * tamanho, linha * tamanho, tamanho, tamanho);
  }
}

// Mapa completo das peças
var pecas = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'], // linha 0 - pretas
  ['♟','♟','♟','♟','♟','♟','♟','♟'], // linha 1 - peões pretos
  ['','','','','','','',''],         // linha 2
  ['','','','','','','',''],         // linha 3
  ['','','','','','','',''],         // linha 4
  ['','','','','','','',''],         // linha 5
  ['♙','♙','♙','♙','♙','♙','♙','♙'], // linha 6 - peões brancos
  ['♖','♘','♗','♕','♔','♗','♘','♖']  // linha 7 - brancas
];

// Desenha as peças
ctx.font = "36px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

for (var l = 0; l < 8; l++) {
  for (var c = 0; c < 8; c++) {
    var peca = pecas[l][c];
    if (peca !== '') {
      // Define a cor da peça
      if (peca.charCodeAt(0) >= 9812 && peca.charCodeAt(0) <= 9817) {
        ctx.fillStyle = "#ffffff"; // peças brancas
      } else {
        ctx.fillStyle = "#000000"; // peças pretas
      }

      // Desenha a peça
      ctx.fillText(peca, c * tamanho + tamanho / 2, l * tamanho + tamanho / 2);
    }
  }
}