import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast';
import { passwordValidate, resetPasswordValidation } from '../helper/validate'

export default function Reset() {
  const navigate = useNavigate()
  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setPassword(prevPassword => ({
      ...prevPassword,
      [name]: value
    }))
  }

  const handleSubmit = (e)  =>{
    e.preventDefault()
    const validationError = resetPasswordValidation(password)
    if(!validationError){
      console.log(password);
      navigate("/profile")
    }
  }
  return (
    <div
      className="card container shadow"
      style={{ width: '370px', marginTop: '70px' ,marginBottom: '70px'}}
    >
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="d-flex flex-column align-items-center mt-4">
        <h2>Reset</h2>
        <span className="text-center mb-4">
          Enter new password.
        </span>
      </div>
      <form  onSubmit={handleSubmit}>
        <div className="container ">

          <div className="container mt-4">
          <input type="text" name='newPassword' className="form-control" onChange={handleInputChange} placeholder='New Password' />
            <input type="password" name='confirmPassword' className="form-control mt-3" onChange={handleInputChange} placeholder='Confirm Password' />
            <button className='btn btn-primary w-100 mt-4 mb-4' type='submit'>Reset</button>
          </div>
        </div>
      </form>
    </div>
  )
}
