//vou conectar com o db
import {pool} from '../database/db.js';

class ItemRepository {
    async create(name, description) {
        const query = 'INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *';
        const result = await pool.query(query, [name, description]);
        return result.rows[0];
    }

    async findAll(){
        const result = await pool.query('SELECT * FROM items ORDER BY id ASC');
        return result.rows;
    }

    async FindById(id) {
        const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
        return result.rows[0];
    }

    async update(id, name, description) {
        const query = 'UPDATE items SET name = $1, description= $2 WHERE id = $3 RETURNING *';
        const result = await pool.query(query, [name, description, id]);
        return result.rows[0];
    }

    async delete(id) {
        const result = await pool.query('DELETE FROM items WHERE id = $1 RETURNING id', [id]);
        return result.rowCount > 0;
    }
}

export default new ItemRepository();