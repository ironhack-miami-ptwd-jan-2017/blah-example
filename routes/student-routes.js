const express = require('express');

const Student = require('../models/student-model.js');

const studentRoutes = express.Router();


studentRoutes.get('/students/new', (req, res, next) => {
  res.render('new-student-view.ejs');
});

studentRoutes.post('/students/new', (req, res, next) => {
  res.redirect('/students');
});

studentRoutes.get('/students', (req, res, next) => {
  Student.find((err, studentList) => {
    if (err) {
      next(err);
      return;
    }

    res.render('list-students-view.ejs', {
      students: studentList
    });
  });
});


module.exports = studentRoutes;
