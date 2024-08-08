const express = require('express');
const { getUser, addUser, createUser, getAllUsers,getsingleuser,UpdateUser, deleteUser} = require('../controllers/userCtrl');

// routes router objects
const router = express.Router();


// create user
router.post('/create-user', createUser);

// // routes - user
// router.get("/", getUser);

// // post
// router.post("/add-user",addUser);

router.get('/get-users', getAllUsers)

router.get('/get-users/:id',getsingleuser)

router.put('/update-user', UpdateUser)

router.delete('/delete-user/:id',deleteUser)
// export
module.exports = router;
