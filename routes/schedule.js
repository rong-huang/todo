var express = require('express');
var router = express.Router();

const scheduleController = require('../Controllers/scheduleController');



/* GET users listing. */
router.route('/').get(scheduleController.getAllSchedule);
router.route('/').post(scheduleController.createSchedule);
router.route('/:id').patch(scheduleController.updateSchedule);
router.route('/:id').delete(scheduleController.deleteSchedule);
router.route('/:id').get(scheduleController.getSchedule);

module.exports = router;
