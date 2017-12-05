const express = require('express');
const router = express.Router();


//add a new plumber to the database
router.post('/plumbers', function (req, res) {
  res.send({type: 'POST'})
});

//book a plumber for a the given slot on the selected day
router.post('/plumbers/slot/:slot/day/:day', function (req, res) {
res.send({type: 'POST'})
});

//get a list of plumbers from the datebase
router.get('/plumbers/:id/bookings', function (req, res) {
res.send({type: 'GET'})
});

//get a list of plumbers from the datebase
router.get('/plumbers', function (req, res) {
res.send({type: 'GET'})
});


module.exports = router;
