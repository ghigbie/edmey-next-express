import express from 'express';
const router = express.Router();
import { register } from '../controllers/auth';

router.get('/register', (req, res, next) => {
    res.json({message: 'Please use a post on this route'})
});

router.post('/register', register );


module.exports = router;