const express = require('express')
const app = express();



//CRUD -> CREATE, READ , UPDATE, DELETE;
//         POST   GET     PUT    DELETE
//http://meusite.com/ <- get-> Entrege a página/
//http://meusite.com/sobre <- get-> Entrege a página/ SOBRE

app.get('/',(req,resposta) => {
  resposta.send(`<form action ="/" method="POST">
  Nome:<input type="text" name="nome"
  <button>Enviar</button>
  </form>`);
});
app.get('/contato',(req,respota)=>{
  respota.send('eliasmartinsrock84@gmail.com')
})
app.post('/',(req,resposta)=>{
  resposta.send('Recebi o formulário')
})

app.listen(3000,() =>{
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000')
});