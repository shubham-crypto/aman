import axios from 'axios';
import React, { useState , useContext, useRef, useEffect } from 'react'
import { Link , redirect, useNavigate} from 'react-router-dom'

export const Login = ({setLoginUser}) => {
    const[error, setError]=useState('');
    const [user, setUser] = useState({
        email: "",
        password: ""
      });
      const navigate = useNavigate();
      const { email, password } = user;

      const handleChange = e => {
        const { type, value } = e.target;
        setUser({
          ...user,
          [type]: value,
        });
      };
    
      const login =  () => {
        try {
          if (email && password) {
            axios.post("http://localhost:5000/login", user)
            .then(res=>{
              if(res.data.message==="Welcome"){
                setLoginUser(res.data.User);
                const token =res.data.auth
                localStorage.setItem("token",token);
                localStorage.setItem("loguser",JSON.stringify(user));
                navigate('/')
              }
              else{
                setError(res.data.message)
              }

            })
          } 
          else {
             alert("invalid");
          }
        } catch (error) {
          setError(error);
        }
      };
  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='back.jpg' alt='/done' />
        <div className='fixed top-0 left-0 w-full h-screen'>
           <div className='fixed w-full px-4 py-24 z-50'>
             <div className='max-w-[450px] h-[600px] mx-auto bg-black/50 text-white'>
                <div className='max w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                    <form  onSubmit={e=>e.preventDefault()} className='w-full flex flex-col py-4'>
                        <input onChange={handleChange} value={user.email} className='p-3 my-2 bg-gray-700' type='email' placeholder='Email' autoComplete='email' />
                        <input onChange={handleChange} value={user.password} className='p-3 my-2 bg-gray-700' type='password' placeholder='Password' autoComplete='Current-password'/>
                        <button onClick={login} className='bg-violet-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p>
                                <input className='mr-2' type='checkbox' />
                                Remember me
                            </p>
                            <p>
                                Need Help?
                            </p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>
                                Join us if you haven't?
                            </span>{' '}
                            <Link to='/Signup'>Sign Up</Link>
                        </p>
                    </form>
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}
