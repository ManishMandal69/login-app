import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'
import toast, { Toaster } from 'react-hot-toast';
import {userNameValidate} from '../helper/validate'

export default function Username() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: '',
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmit = (e)  =>{
    e.preventDefault()
    const validationError = userNameValidate(user.username)
    if(!validationError){
      console.log(user);
    navigate('/password')
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
            <img src={avatar} class="h-50 w-50 border rounded-circle shadow" alt="..." />
          </div>

          <div className="container mt-4">
            <input type="text" name='username' value={user.username} onChange={handleInputChange}className="form-control" placeholder='Username'/>
            <button className='btn btn-primary w-100 mt-4' type='submit'>Let's Go</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Not a Member{' '}
              <Link className="text-red-500" to="/register">
                Register Now
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
