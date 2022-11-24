import express from 'express'
import { createCategory, deleteCategory, getAllCategory, getSingleCategory, updateCategory } from '../controllers/categoryController.js';

// init router 
const router = express.Router();


// product routes 
router.post('/', createCategory);
router.get('/', getAllCategory);
router.get('/:id', getSingleCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);


export default router;