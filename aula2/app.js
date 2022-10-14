const multiplica=require('./mod')

console.log(multiplica(2,3));

/// Para Se localizar 
console.log(__filename);//Arquivo Atual 
console.log(__dirname);//Pasta atual
const path= require('path');
console.log(path.resolve(__dirname,'..','..'));