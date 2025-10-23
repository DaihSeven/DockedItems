import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('✅ Conexão bem-sucedida com o banco de dados!');
    
    const res = await client.query('SELECT version();');
    console.log('Versão do PostgreSQL:', res.rows[0].version);
    
    client.release();
  } catch (err) {
    console.error('❌ Erro ao conectar ao banco:', err);
  } finally {
    await pool.end();
  }
}

testConnection();

export { pool };
