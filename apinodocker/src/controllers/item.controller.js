import ItemService from '../services/item.service.js';

class ItemController {
    async create(req,res) {
        const{name, description} = req.body;
        try{
            const newItem = await ItemService.createItem(name,description);
            res.status(201).json(newItem);
        } catch (error) {
            if (error.message.includes('obrigatório')) {
                return res.status(400).json({error: error.message});
            }
            res.status(500).json({error: 'Erro interno ao criar item.'});
        }   
    }

    async findAll(req,res) {
        try{
            const items = await ItemService.getAllItems();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({error: 'Erro interno ao buscar items.'});
        }
    }

    async findById(req, res) {
        const { id } = req.params;
        try{
            const item = await ItemService.findById(id);
            if (!item) {
                 return res.status(404).json({ error: 'Item não encontrado.' });
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({error: 'Erro interno ao buscar o item.'});
        }
    }

    async updateItem (req,res) {
    const { id } = req.params;
    const { name, description } = req.body;
        try {
            const updateItem = await ItemService.update(id, name, description);
            if (!updatedItem) {
                 return res.status(404).json({ error: 'Item não encontrado para atualização.' });
            }
            res.status(200).json(updateItem);
        } catch (error) {
            res.status(500).json({error: 'Erro interno ao atualizar o item.'});
        }
    }

    async deleteItem(req,res){
        const { id } = req.params;
        try{
            const deleteItem = await ItemService.delete(id);
            if (!deletedItem) {
                 return res.status(404).json({ error: 'Item não encontrado para exclusão.' });
            }
            res.status(200).json(deleteItem);
        } catch (error) {
            res.status(500).json({error: 'Erro interno ao deletar o item.'});
        }
    }
}

export default new ItemController();