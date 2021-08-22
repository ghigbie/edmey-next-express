import express from 'express';

const router = express.Router();

router.get('/register', (req, res, next) => {
    res.send('register user')
});

module.exports = router;