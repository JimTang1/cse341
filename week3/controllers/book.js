const Book = require('../models/book');

exports.getAddBook = (req,res,next)=>{
    //res.send('this is book page');
    res.render('admin/add-book',
                {pageTitle: "Add a book", 
                path: 'add-book'
            });
}

exports.postAddBook = ('/book',(req,res,next)=>{
    const title = req.body.title;
    const price = req.body.price;
    const summary = req.body.summary;
    const book = new Book(title, price,summary);
    book.save();
    res.redirect('/');
});

// exports.getBook= (req,res,next)=>{
//     Book.fetchAll((books)=>{
//         res.render('display',{
//             booklist: books,
//             pageTitle: "Book info", 
//             path: '/',
//             activeShop: true,
//             productCSS: true
//         });
//     });
// };