const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bookData = require('./routes/book');
const displayRoutes = require('./routes/display');

app.use(bookData.routes); 
app.use(displayRoutes);


// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     //res.status(404).render('404',{pageTitle: 'page is not found!'});
// });

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', adminData.routes);
// app.use(displayRoutes);

 

app.listen(5000);