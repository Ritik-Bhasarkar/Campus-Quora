import {useEffect,useState} from 'react';
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import videoBg from '../resource/videos/background-vid.mp4'

const Login = () => {
   



  return (
    <div className='login-container'>
       
        {/* <div className='website-name'>
            <h2>Campus-Quora</h2>
        </div> */}
        <div className='login-container__card'>
            <div className='bg-video'>
                <video autoplay loop muted>
                <source src={videoBg} type='video/mp4'/>
                </video>
            </div>
         <div className='login-component'>
            <div className='login-header'>
            <h1>Login</h1>
            </div>
            <div className='login-socials'>
              <div className='login__byGoogle'>
                <button className='login-btn'>
                    <div className='login__btn-icon'>
                        <FcGoogle/>
                    </div>
                    <span>Continue with Google</span>
                </button>
              </div> 
              <div className='login__byGithub'>
                 <button className='login-btn'>
                    <div className='login__btn-icon'>
                        <BsGithub/>
                    </div>
                    <span>Continue with GitHub</span>
                </button>
              </div> 
            </div>
            <form className='login-form'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' ></input>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password'></input>
                <span className='login-form__forgotPwd'>forgot password?</span>
                <button className='login-form btn'>Sign In</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login