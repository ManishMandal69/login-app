const express = require('express');
const router = express.Router()

/* import all controllers */
const { register, login} = require('../controllers/userController');

// POST Request
router.post('/register', register) // register user
// router.post('/registerMail', createUser) // send the mail
// router.post('/authenticate', createUser) // authenticate user
router.post('/login', login) // login in app


// GET Request
// router.get('/user/:username', getUser) // user with username
// router.get('/generateOTP', generateOTP) // generate random OTP
// router.get('/verifyOTP', verifyOTP) // verify generated OTP
// router.get('/createResetSession', createResetSession) // reset all the variables


// PUT Request
// router.put('/updateUser', updateUser) // is used to update user profile
// router.put('/resetPassword', resetPassword) // use to reset password



module.exports = router