const nome ='Elias'
const sobrenome='Martins'

const falaNome = ()=> nome+ ' '+sobrenome;


//          formas de exportar modulos
module.exports.nome = nome;
module.exports.sobrenome=sobrenome;
module.exports.falaNome=falaNome;

exports.nome=nome;
exports.sobrenome=sobrenome;
exports.falaNome=falaNome;
this.sobrenome2='batman'

module.exports={
  nome,sobrenome,pessoa
};//pra exportar na lapada 



// console.log(module.exports);

class Pessoa{
  constructor(nome){
    this.nome=nome;

  }
}
exports.clas=Pessoa;