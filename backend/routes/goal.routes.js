const { Router } = require('express');

const router = Router();

const {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal
} = require('../controllers/goal.controllers');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);
// Different way of writing code by chaining similiar routes.
// I was today years old when I found out you can do this. 2-7-2022
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);

/*
// Typical way of writing code
router.get('/', getGoals);

router.post('/', setGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

*/

module.exports = router; // equivelant in module is export default router;
