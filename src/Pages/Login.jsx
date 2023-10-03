import {useEffect,useState,useRef} from 'react';
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'

const Login = () => {
    const headerRef = useRef(null);
    const [isGradientComplete, setIsGradientComplete] = useState(false);
    useEffect(()=>{
       const updateMousePosition =(MouseEvent)=>{
            if(!headerRef.current) return;
            const {clientX} = MouseEvent;
            headerRef.current.style.setProperty('--x',`${clientX}px`);
            
       } 
       window.addEventListener('mousemove',updateMousePosition);
       return()=>{
        window.removeEventListener('mousemove',updateMousePosition)
       }
    },[])



  return (
    <div className='login-container' ref={headerRef}>
        <div className='login-container__card'>
        <div className={`login-header ${isGradientComplete ? 'text-black' : ''}`} ref={headerRef}>
            <h1>Login</h1>
        </div>
        <div className='login-component'>
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