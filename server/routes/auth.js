import express from 'express';
import { register } from 'register';

const router = express.Router();

router.post('/register', register );

module.exports = router;