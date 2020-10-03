const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/pr01/form', {
        title: 'Form page',
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit', (req, res, next) => {
    //console.log(req.body.i1)
    //console.log(req.body.i1)
    res.render('pages/pr01/display', {
        title: 'display page',
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        newText1: req.body.newText1,
        newText2: req.body.newText2,
    });
});

module.exports = router;