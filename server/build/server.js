"use strict";
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ng_vehiculos_bd'
});
app.post('/api/login', (req, res) => {
    const { correo, password1 } = req.body;
    const query = 'SELECT * FROM usuario WHERE correo = ? AND password1 = ?';
    connection.query(query, [correo, password1], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
        if (results.length > 0) {
            // Las credenciales son correctas
            return res.status(200).json({ success: true, message: 'Autenticación exitosa' });
        }
        else {
            // Las credenciales son incorrectas
            return res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
        }
    });
});
