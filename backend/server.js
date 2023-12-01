const express = require('express'); //Usamos express
const bodyParser = require('body-parser'); //extrair os dados do corpo das requisições
const cors = require('cors');  // cors, para dizer pro servidor que vamos acessar de outro locallhost

const cadastroRouter = require('./routes/cadastro');
const loginRouter = require('./routes/login');

const app = express();
const port = 3033; // porta do nosso back

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));  // configuração origin: '*'


app.use('/cadastro', cadastroRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
