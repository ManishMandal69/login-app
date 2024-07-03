import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast';
import { passwordValidate } from '../helper/validate'

export default function Password() {
  return (
    <div
      className="card container shadow"
      style={{ width: '370px', marginTop: '70px' ,marginBottom: '70px'}}
    >
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="d-flex flex-column align-items-center mt-4">
        <h2>Recovery</h2>
        <span className="text-center mb-4">
          Enter OTP to Reset password
        </span>
      </div>
      <form >
        <div className="container ">

          <div className="container mt-4">
            <span className='text-body-secondary fs-6'>Enter 6 digit OTP sent to your email address</span>
            <input type="password"className="form-control" placeholder='OTP' />
            <button className='btn btn-primary w-100 mt-4' type='submit'>Recover</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Can't get OTP{' '}
              <Link className="text-danger">
                Resend
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
