const express = require('express');

const otherRoutes = express.Router();


  // localhost:3000/whatever
otherRoutes.get('/whatever', (req, res, next) => {
  res.render('something-view.ejs');
});

  // localhost:3000/search
otherRoutes.post('/search', (req, res, next) => {
  res.redirect('/');
});


module.exports = otherRoutes;
