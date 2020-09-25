const path = require('path');

const express = require('express');
const router = express.Router();
const books = [];
const summery = [];
router.get('/add-book',(req,res,next)=>{
    //res.send('this is book page');
    res.render('add-book',
                {pageTitle: "Add a book", 
                path: 'add-book'});

});

router.post('/book',(req,res,next)=>{
    console.log(req.body);
    console.log(123);
    books.push({title: req.body.title, area: req.body.area});
    
    res.redirect('/');
})

exports.routes = router;
exports.books = books;