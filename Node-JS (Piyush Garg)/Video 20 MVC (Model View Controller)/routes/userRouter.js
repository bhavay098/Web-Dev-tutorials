const express = require('express');
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/controllers') // importing path handlers file

const router = express.Router();  // router = a sub-application, isolated for specific routes
// Think of router as a modular route handler — it's a mini version of your main app (like app.get, app.post, etc.), but scoped.

router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;