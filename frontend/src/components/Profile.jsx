import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast';
import { profileValidate, validateRegisterForm } from '../helper/validate'
import fileToBase64 from '../helper/convert';

export default function Profile() {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    image: '',
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    address: ''
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setRegister(prevRegister => ({
      ...prevRegister,
      [name]: value
    }))
  }

  const handleFileChange = async(e) => {
    const file = e.target.files[0]
    console.log(e, file, fileToBase64(file));
    if(file){
      try {
        const base64 = await fileToBase64(file) // Await the conversion to base64
        setRegister(prevRegister => ({
          ...prevRegister,
          image: base64
        }))
      } catch (error) {
        console.error("Error converting file to base64", error)
      }
    }
  }

  const handleSubmit = (e)  =>{
    e.preventDefault()
    const validationError = profileValidate(register);
    if(!validationError){
      console.log(register);
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
        <h2>Profile</h2>
        <span className="text-center mb-4">
          You can update the details
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container ">
          <div className="text-center">
            <label htmlFor='imageInput'>
            <img src={register.image || avatar} className="h-50 w-50 border rounded-circle shadow" style={{ cursor: 'pointer' }}  alt="..." />
            </label>
            <input id='imageInput' type='file' style={{ display: 'none' }} onChange={handleFileChange}/>
          </div>

          <div className="container mt-4">
          <div className="name d-flex w-100 gap-4 mt-4">
          <input type="text" name='firstname' value={register.firstname} autocomplete="firstname" onChange={handleInputChange} className="form-control" placeholder='firstname' />
          <input type="text" name='lastname' value={register.lastname} autocomplete="lastname" onChange={handleInputChange} className="form-control" placeholder='lastname' />
                </div>

                <div className="name d-flex w-100 gap-4 mt-4">
                <input type="text" name='mobile' value={register.mobile} autocomplete="mobile" onChange={handleInputChange} className="form-control" placeholder='mobile' />
                <input type="text" name='email' value={register.email} autocomplete="email" onChange={handleInputChange} className="form-control" placeholder='email' />
                </div>
            
            <input type="text" name='address' value={register.address} autocomplete="address" onChange={handleInputChange} className="form-control mt-4" placeholder='address' />
            <button className='btn btn-primary w-100 mt-4' type='submit'>Update</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Forget Password{' '}
              <Link className="text-red-500" to="/">
                Logout
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
