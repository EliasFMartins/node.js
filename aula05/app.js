
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'text.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/lerArquivo');

// const pessoas = [
//   {nome:'joão'},
//   {nome:'Maria'},
//   {nome:'Carla'},
//   {nome:'Emilia'},
//   {nome:'Mame'}
// ];
// const json = JSON.stringify(pessoas,'',2);
// escreve(caminhoArquivo,json);

async function lerArquivo(caminho){
 const dados = await ler(caminho)
  renderizaDados(dados);
};

function renderizaDados(dados){
 
  dados = JSON.parse(dados)
  dados.forEach(val=> console.log(val))
}


lerArquivo(caminhoArquivo);