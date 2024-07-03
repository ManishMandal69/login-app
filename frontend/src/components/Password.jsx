import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast';
import { passwordValidate } from '../helper/validate'

export default function Password() {
  const navigate = useNavigate()
  const [password, setPassword] = useState({
    passwd: '',
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
    const validationError = passwordValidate(password.passwd)
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
        <h2>Hello Again!</h2>
        <span className="text-center mb-4">
          Explore More by connecting with us.
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container ">
          <div className="text-center">
            <img src={avatar} className="h-50 w-50 border rounded-circle shadow" alt="..." />
          </div>

          <div className="container mt-4">
            <input type="password" name='passwd' value={password.passwd} onChange={handleInputChange}className="form-control" placeholder='Password' />
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
