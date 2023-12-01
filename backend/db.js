const { Pool } = require('pg');

const pool = new Pool({
  user: 'LoginCadastro',
  host: 'localhost',
  database: 'Usuarios',
  password: 'LoginCadastro',
  port: 5432,
});


const cadastrarUsuario = async (email, hashedPassword) => {
  const result = await pool.query('INSERT INTO usuarios (email, senha) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
  return result.rows[0];
};

const buscarUsuarioPorUsername = async (email) => {
  const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  return result.rows[0];
};

module.exports = {
  cadastrarUsuario,
  buscarUsuarioPorUsername,
};
