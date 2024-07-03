import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast';
import { passwordValidate } from '../helper/validate'
import fileToBase64 from '../helper/convert';

export default function Register() {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    image: '',
    email: '',
    username: '',
    password: ''
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setRegister(prevRegister => ({
      ...prevRegister,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.value;
    if(file){
      setRegister(prevRegister =>({...prevRegister, image:fileToBase64(file)}))
    }
  }

  const handleSubmit = (e)  =>{
    e.preventDefault()
    // const validationError = passwordValidate(Register.passwd)
    // if(!validationError){
      console.log(register);
      navigate("/profile")
    // }
  }
  return (
    <div
      className="card container shadow"
      style={{ width: '370px', marginTop: '70px' ,marginBottom: '70px'}}
    >
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="d-flex flex-column align-items-center mt-4">
        <h2>Register</h2>
        <span className="text-center mb-4">
          Explore More by connecting with us.
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container ">
          <div className="text-center">
            <img src={register.image || avatar} className="h-50 w-50 border rounded-circle shadow" alt="..." />
            <input type='file' style={{ display: 'none' }} onChange={handleFileChange}/>
          </div>

          <div className="container mt-4">
            <input type="email" name='email' value={register.email} onChange={handleInputChange}className="form-control" placeholder='abc@gmail.com' />
            <input type="text" name='username' value={register.username} onChange={handleInputChange}className="form-control" placeholder='john_doe' />
            <input type="password" name='password' value={register.email} onChange={handleInputChange}className="form-control" placeholder='password' />
            <button className='btn btn-primary w-100 mt-4' type='submit'>Sign In</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Forget Password{' '}
              <Link className="text-red-500" to="/recovery">
                Recover Now
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
