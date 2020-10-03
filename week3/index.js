const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');




app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');




const bookRoutes = require('./routes/book');
const displayRoutes = require('./routes/display');

app.use(bookRoutes); 
app.use(displayRoutes);


// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     //res.status(404).render('404',{pageTitle: 'page is not found!'});
// });

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', adminData.routes);
// app.use(displayRoutes);

app.use(errorController.get404);

app.listen(5000);