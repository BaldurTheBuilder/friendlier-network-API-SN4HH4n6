const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

// /api/users
// router.route('/').get(getUsers);
router.route('/').get(getUsers).post(createUser);

// /api/users/:user_id
router.route('/:user_id').get(getSingleUser).delete(deleteUser);
// router.route('/:user_id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;