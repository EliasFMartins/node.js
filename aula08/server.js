const express = require('express')
const app = express();



app.get('/',(req,resposta) => {
  resposta.send(`<form action ="/" method="POST">
  Nomes:<input type="text" name="nome"
  <button>Olá Mundoasasd</button>
  </form>`);
});
app.get('/testes',(req,res)=>{
  console.log(req.params);
  res.send('oi')
})
app.post('/',(req,resposta)=>{
  resposta.send('Recebi o formulário')
})

app.listen(3000,() =>{
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3003')
});