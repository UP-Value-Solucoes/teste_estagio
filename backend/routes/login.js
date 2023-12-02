const express = require('express');
const db = require('../db');
const auth = require('../auth');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.buscarUsuarioPorUsername(email);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const match = await bcrypt.compare(password, user.senha);

    if (!match) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const token = auth.gerarToken(user);

    res.status(200).json({ message: 'Login bem-sucedido', user: { id: user.id, username: user.email }, token });
  } catch (error) {
    console.error('Erro ao fazer login', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
