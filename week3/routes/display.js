const express = require('express');
const path = require('path');
const router = express.Router();
const displayController = require('../controllers/shop');
const bookController= require('../controllers/book');

router.get('/',displayController.getBook);
//router.get('/',bookController.getBook);

router.get('/books/:bookID', displayController.getBooks);

module.exports = router;