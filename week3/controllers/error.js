exports.get404 = (req,res,next)=>{
        //res.status(404).sendFile(path.join(__dirname, 'views', '404.ejs'));
        res.status(404).render('404',{pageTitle: 'page is not found!', path: '/404'});
    };