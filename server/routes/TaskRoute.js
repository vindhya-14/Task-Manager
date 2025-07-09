// const express = require('express');
// const router = express.Router();
// const taskController = require('../controllers/Task.controller');

// router.get('/', taskController.getTasks);
// router.post('/', taskController.addTask);
// router.put('/:id', taskController.editTask);
// router.delete('/:id', taskController.removeTask);

// module.exports = router;


const express = require('express');
const router = express.Router();
const taskController = require('../controllers/Task.controller');

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.post('/', taskController.addTask);
router.put('/:id', taskController.editTask);
router.delete('/:id', taskController.removeTask);

module.exports = router;
