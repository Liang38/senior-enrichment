// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

var Promise = require('bluebird');
var db = require('./db');
var Campus = require('./db/models/campus');
var Student = require('./db/models/student');


var data = {
    campus: [{ name: 'campus_1', photo: '' },
    { name: 'campus_2', photo: '' },
    { name: 'campus_3', photo: '' },
    { name: 'campus_4', photo: '' },
    ],
    student: [{ name: 'student_0', email: 'email_1', campusId: 1 },
    { name: 'student_1', email: 'email_2', campusId: 2 },
    { name: 'student_2', email: 'email_3', campusId: 3 },
    { name: 'student_3', email: 'email_4', campusId: 4 },
    { name: 'student_4', email: 'email_5', campusId: 1 },
    { name: 'student_5', email: 'email_6', campusId: 2 },
    { name: 'student_6', email: 'email_7', campusId: 3 },
    { name: 'student_7', email: 'email_8', campusId: 4 },
    ]
};

db.sync({ force: true })
    .then(function () {
        console.log("Dropped old data, now inserting data");
        return Promise.map(Object.keys(data), function (name) {
            return Promise.map(data[name], function (item) {
                return db.model(name)
                    .create(item);
            });
        });
    })
    .then(function () {
        console.log("Finished inserting data (press ctrl-c to exit)");
    })
    .catch(function (err) {
        console.error('There was totally a problem', err, err.stack);
    });
