const express = require('express');
const path = require('path');
const router = express.Router();
const bookData = require('./book');

router.get('/',(req,res,next)=>{
    // //res.send('this is display page');
    // console.log('display',bookData.books);
    const books = bookData.books;
    res.render('display',
                {booklist: books,
                pageTitle: "Book info", 
                path: '/',
                activeShop: true,
                productCSS: true});
});

module.exports = router;