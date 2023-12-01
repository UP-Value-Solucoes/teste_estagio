// Importo o express.
const express = require("express");
const { Pool } = require('pg');
const cors = require("cors");

const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'my_password',
    port: 5432,
});

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", async(require, response) =>{
    const { userEmail } = require.body;
    const { userPassword } = require.body;

    const validation = 
    `
        SELECT * FROM users WHERE
        email = $1 AND
        password = $2
    `

    const values = [userEmail, userPassword];
    try{
        const result = await pool.query(validation, values);
        if (result.rows.length > 0) {
            response.send("Permitir");
        } else {
            response.send('Não permitir');
        }
    } catch (err) {
        console.error(err);
        response.send("Erro " + err);
    }

})


app.listen(3333, () => {
    console.log("Servidor funcionando!!!")
})