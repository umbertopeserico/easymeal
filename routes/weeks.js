var express = require('express');
var router = express.Router();
var weekCtrl = require('../controllers/weeks.js');

/* GET home page. */
router.get('/showCurrentWeek', function (req, res, next) {
    weekCtrl.showCurrentWeek(req, res);
});

router.get('/showWeek/:number', function (req, res, next) {
    weekCtrl.showWeekByNumber(req, res);
});

router.get('/:weekNumber/:dayName', function (req, res, next) {
    weekCtrl.showWeekDay(req, res);
});

module.exports = router;