const express = require('express');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await auth.hashSenha(password);

    const user = await db.cadastrarUsuario(email, hashedPassword, firstName, lastName);
    const token = auth.gerarToken(user);

    console.log(user,token)
    res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: { id: user.id, username: user.email, firstName: user.firstName, lastName: user.lastName }, token });
  } catch (error) {
    console.error('Erro ao cadastrar usuário', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
