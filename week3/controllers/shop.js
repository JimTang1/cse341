const books = [];
const Book = require('../models/book');

exports.getBook= (req,res,next)=>{
    Book.fetchAll((books)=>{
        res.render('shop/display',{
            booklist: books,
            pageTitle: "Book info", 
            path: '/',
            activeShop: true,
            productCSS: true
        });
    });
};

exports.getBooks = (req, res, next) =>{
    const bookId = req.param.bookID;
    console.log(bookId);
    res.redirect('/');
}