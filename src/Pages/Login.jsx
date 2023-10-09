import {useEffect,useState} from 'react';
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import videoBg from '../resource/videos/background-vid.mp4'
import { auth } from '../firebase';
// import {GithubAuthProvider , GoogleAuthProvider ,signInWithPopup,signOut} from 'firebase/auth';

const Login = () => {
   
  const [user,setUser] = useState({})


  return (
    <div className='login-container'>
        <div className='login-container__card'>
          <div className='login-container__firstHalf'>
                <video className='video-src' autoPlay loop muted>
                <source src={videoBg} type='video/mp4'/>
                </video>
          </div>
         <div className='login-container__secondHalf'>
          <h1 className='website-name'>Campus
          <span className='blinking-letter'>Q</span>
          </h1>
          <p>A place to share knowledge and better understand the world</p>
            <div className='login-component__loginText'>
              <h2>Sign In</h2>
            </div>
            
          <div className='login-component__wrapper'>
            <div className='login-component__socials'>
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
              <p className='login__seperate'>or</p>
            </div>
            <form className='login-form'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' ></input>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password'></input>
                <span className='login-form__forgotPwd'>forgot password?</span>
                <button className='login-form btn'>Sign In</button>
            </form>
            <div className='signUp-component'>
              <span>Don't have an account? signUp</span>
            </div>
            </div>
            <div className="login__footer">
              <p>About</p>
              
              <p>Careers</p>
             
              <p>Privacy</p>
              <p>Terms</p>
              <p>Contact</p>
              <p>&copy; CampusQ Inc. 2023</p>
        </div>
          </div>
        </div>  
    </div>
  )
}

export default Login