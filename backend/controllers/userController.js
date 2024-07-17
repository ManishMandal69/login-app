const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


/** POST: http://localhost:5000/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/


const register = async(req, res) =>{
    try {
        const {username, password, email, profile} = req.body

    // checking existing user
    const existUsername = await User.findOne({username})
    if(existUsername){
       return res.status(400).send({error: "Please use unique username"})
    }

    // checking existing email
    const existEmail = await User.findOne({email})
    if(existEmail){
        return res.status(400).send({error: "Please use unique Email"})
    }

    // hash password and create user
    if(password){
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({
            username,
            password: hashPassword,
            profile: profile || '',
            email
        })
        await user.save();
       return res.status(200).send({msg : "User Register Successfully"})
    }
    } catch (error) {
        res.status(500).send({error: error.message})
    }
    

}


/** POST: http://localhost:5000/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/

const login = async(req, res) => {
    const {username, password} = req.body;
    try {
        // Check Username
        const user = await User.findOne({username});
        if(!user){
            res.status(400).send({error: "User does not match"})
        }

        // Check Password
        const passwordCheck = await bcrypt.compare(password, user.password)
        if(!passwordCheck){
            res.status(400).send({error: "Password does not match"})
        }

        // Generate Token
        const token = jwt.sign({
            userId: user._id,
            username: user.username
            }, process.env.JWT_SECRETKEY , { expiresIn: '1hr'})

        res.status(200).send({msg: "Login Successful...!",username: user.username, token})
    } catch (error) {
        res.status(500).send({error: "Username Not Found"})
    }

}

/** GET: http://localhost:8080/api/user/example123 */

const getUser = async(req, res) =>{

}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/

const updateUser = async() =>{

}


/** GET: http://localhost:8080/api/generateOTP */

const generateOTP = async(req, res) =>{

}

/** GET: http://localhost:8080/api/verifyOTP */

const verifyOTP = async(req, res) =>{

}

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */

const createResetSession = async(req, res) =>{

}


// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */

const resetPassword = async(req, res) =>{

}


module.exports = { register , login}