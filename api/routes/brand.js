import express from 'express'
import { createBrand, deleteBrand, getAllBrand, getSingleBrand, updateBrand } from '../controllers/brandController.js';

// init router 
const router = express.Router();


// product routes 
router.post('/', createBrand);
router.get('/', getAllBrand);
router.get('/:id', getSingleBrand);
router.patch('/:id', updateBrand);
router.delete('/:id', deleteBrand);


export default router;