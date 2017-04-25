const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blah');


const Student = require('../models/student-model.js');


const studentsInfo = [
  {
    firstName: 'Gus',
    lastName: 'Gutierrez',
    age: 21,
    schoolId: '12245',
    picture: '/images/blah.gif'
  },
  {
    firstName: 'Wadson',
    lastName: 'Fleurigene',
    age: 21,
    schoolId: '1337',
    picture: '/images/blah.gif'
  }
];


Student.create(studentsInfo, (err, studentsDocs) => {
  if (err) {
    throw err;
  }

  studentsDocs.forEach((oneStudent) => {
    console.log(`NEW STUDENT ${oneStudent.firstName} -> ${oneStudent._id}`);
  });
});
