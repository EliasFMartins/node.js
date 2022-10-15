const fs = require('fs').promises;
const path = require('path');
const { json } = require('stream/consumers');
const caminhoArquivo = path.resolve(__dirname,'..','text.json');

const pessoas = [
  {nome:'joão'},
  {nome:'Maria'},
  {nome:'Carla'},
  {nome:'Emilia'},
  {nome:'Mame'}
];
const json = JSON.stringify(pessoas);

fs.writeFile(caminhoArquivo,json,{flag:'a'});
//o 'w' serve para caso o arquivo exista  apague tudo q está escrito e coloque a frase nele a flag a  adc texto ao documento +=