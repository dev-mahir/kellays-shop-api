import express from 'express';
import {  loggedInUser, login, register } from '../controllers/userController.js';

// init router 
const router = express.Router();



// user auth route 
router.post('/register', register)
router.post('/login', login)
router.get('/activate/:token', loggedInUser)




// export  router 
 export default router 