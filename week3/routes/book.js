const path = require('path');
const bookController= require('../controllers/book');
const express = require('express');
const router = express.Router();


router.get('/add-book', bookController.getAddBook);

router.post('/book',bookController.postAddBook);


//router.get('/',bookController.getBook);

module.exports = router;