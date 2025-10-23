import express from 'express';
import ItemController from '../controllers/item.controller.js';

const router = express.Router();

router.use(express.json());
router.get('/', (req,res) => {
    res.status(200).json({message: 'API funcionando!'});
});
/*
router.post('/items', ItemController.create);
router.put('/items/:id', ItemController.updateItem);
router.delete('/items/:id', ItemController.deleteItem);
router.get('/items', ItemController.findAll);
router.get('/items/:id', ItemController.findById);
*/
export default router;