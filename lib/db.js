// index.js (o en un archivo separado como db.js)

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,

  // AWS RDS a menudo requiere SSL
  ssl: {
    rejectUnauthorized: false
  }
});

// Función rápida para probar la conexión
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('¡Conexión exitosa a la base de datos de AWS!');
    const res = await client.query('SELECT NOW()');
    console.log('Hora del servidor de BD:', res.rows[0].now);
    client.release(); // Libera al cliente de vuelta al pool
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
  }
}

// Llama a la función de prueba
testConnection();