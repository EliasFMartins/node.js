const fs = require('fs').promises;
// const { json } = require('stream/consumers');
module.exports = (caminho,dados) =>{
  fs.writeFile(caminho,dados,{flag:'w'});
}





//o 'w' serve para caso o arquivo exista  apague tudo q está escrito e coloque a frase nele a flag a  adc texto ao documento +=