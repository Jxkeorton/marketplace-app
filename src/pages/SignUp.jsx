import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg' 
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const {email, password, name} = formData
  
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }


  return (
    <>
      <div className="pageContainer">
        <header>
          <p className='pageHeader'>
            Welcome Back !
          </p>
        </header>

        <main>
          <form>

          <input 
              className='nameInput' 
              type='text' 
              placeholder='Name' 
              id='name' 
              value={email} 
              onChange={onChange} 
            />

            <input 
              className='emailInput' 
              type='email' 
              placeholder='Email' 
              id='email' 
              value={email} 
              onChange={onChange} 
            />

            <div className="passwordInputDiv">
              <input 
                type={showPassword ? 'text' : 'password'} 
                className='passwordInput' 
                placeholder='password' 
                id='password' 
                value={password} 
                onChange={onChange} 
              />

              <img 
                src={visibilityIcon} 
                alt="show Password" 
                className="showPassword" 
                onClick={() => setShowPassword((prevState) => !prevState )} 
              />
            </div>

            <Link to='/forgot-password' className='forgotPasswordLink' >
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signUpText">
                Sign Up
              </p>
              <button className='signUpButton'>
                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
              </button>
            </div>
          </form>

          {/* Google Auth */}

          <Link to='/sign-in' className='registerLink' >
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  )
}