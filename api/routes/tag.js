import express from 'express'
import { createTag, deleteTag, getAllTag, getSingleTag, updateTag } from '../controllers/tagController.js';

// init router 
const router = express.Router();


// product routes 
router.post('/', createTag);
router.get('/', getAllTag);
router.get('/:id', getSingleTag);
router.patch('/:id', updateTag);
router.delete('/:id', deleteTag);


export default router;