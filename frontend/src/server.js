const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Escolha a porta que desejar

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validar campos
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }


  // Exemplo de resposta de sucesso
  res.json({ success: true, message: 'Login bem-sucedido!' });
});

app.listen(port, () => {
  console.log(`Servidor Express iniciado na porta ${port}`);
});