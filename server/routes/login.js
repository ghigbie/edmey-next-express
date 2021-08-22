import express from 'express';
const router = express.Router();
import { login } from '../controllers/login'

router.get('/login', login);

module.exports = router