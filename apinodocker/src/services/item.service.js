import ItemRepository from '../repositories/item.repository.js';

class ItemService {
    async createItem(name, description) {
        if(!name) {
            throw new Error('O nome do item é obrigatório. ');
        }
        return ItemRepository.create(name, description);
    }

    async getAllItems() {
        return ItemRepository.findAll();
    }

    async getItemById(id) {
        const item = await ItemRepository.FindById(id);
        if(!item) {
            throw new Error('Item não encontrado.');
        }
        return item;
    }

    async updateItem(id, name, description) {
        if(!name) {
            throw new Error('Onome do item é obrigatório para atualização.');
        }
        const updateItem = await ItemRepository.update(id, name, description);
        if (!updateItem) {
            throw new Error('Item não encontrado para atualização.')
        }
        return updateItem;
    }
    async deleteItem(id) {
        const success = await ItemRepository.delete(id);
        if(!success) {
            throw new Error('Item não encontrado para exclusão.');
        }
        return true;
    }
}

export default new ItemService();