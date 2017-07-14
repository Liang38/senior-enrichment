'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models/campus');
const Student = require('../db/models/student')

// get students
api.get('/students', function (req, res, next) {
	Student.findAll()
		.then((students) => res.send(students))
		.catch(next)
})
// get students/:studentId
api.get('/students/:studentId', function (req, res, next) {
	Student.findById(req.params.studentId)
		.then(student => res.json(student))
		.catch(next);
});
// post student

api.post('/students/', function (req, res, next) {
	Student.create(req.body)
		.then(student => res.json(student))
		.catch(next);
})
//put student
api.put('/students/:studentId', function (req, res, next) {
	const studentId = req.params.studentId;
	Student.findById(studentId)
		.then(studentInfo => studentInfo.update(req.body))
		.then(res.sendStatus(200))
		.catch(next);
})
// delete student/:studentId
api.delete('/students/:studentId', function (req, res, next) {
	const id = req.params.studentId;

	Student.destroy({ where: { id } })
		.then(() => res.status(204).end())
		.catch(next);
});


// get campuses
api.get('/campuses', function (req, res, next) {
	Campus.findAll()
		.then((campuses) => res.send(campuses))
		.catch(next)
})
// get campuses/:campusId
api.get('/campuses/:campusId', function (req, res, next) {
	Campus.findById(req.params.campusId)
		.then(student => res.json(student))
		.catch(next);
});
// post student

api.post('/campuses/', function (req, res, next) {
	Campus.create(req.body)
		.then(student => res.json(student))
		.catch(next);
})
//put student
api.put('/campuses/:campusId', function (req, res, next) {
	const campusId = req.params.campusId;
	Campus.findById(campusId)
		.then(studentInfo => studentInfo.update(req.body))
		.then(res.sendStatus(200))
		.catch(next);
})
// delete student/:campusId
api.delete('/campuses/:campusId', function (req, res, next) {
	const id = req.params.campusId;

	Campus.destroy({ where: { id } })
		.then(() => res.status(204).end())
		.catch(next);
});


module.exports = api