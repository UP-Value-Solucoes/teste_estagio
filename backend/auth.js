const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashSenha = async (senha) => {
  const saltRounds = 10;
  return await bcrypt.hash(senha, saltRounds);
};

const compararSenhas = async (senha, hash) => {
  return await bcrypt.compare(senha, hash);
};

const gerarToken = (user) => {
  const segredo = 'MUDAR_A_SENHA_DO_TOKEN';
  return jwt.sign({ id: user.id, username: user.email }, segredo, { expiresIn: '1h' });
};

module.exports = {
  hashSenha,
  compararSenhas,
  gerarToken,
};
