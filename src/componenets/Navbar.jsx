import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = ({user , setLoginUser}) => {

  useEffect(() => {
    if(localStorage.token!=undefined){
      setLoginUser(JSON.parse(localStorage.loguser))
    }
  }, []);

  const navigate=useNavigate();
  const handleLogout = () =>{
    try {
      localStorage.removeItem("token")
      setLoginUser(null);
      navigate('/')
    } catch(error){
      console.log(error);
    }
  }
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to='/'>
          <h1 className='text-violet-600 flex text-4xl font- cursor-pointer'>
          DAYDREAMS
          <img className=' h-10 mx-1 relative mt-0 ' src='inf.png'></img>
          </h1>
        </Link>
        {user?.email ? (
          <div className='flex min-w-max'>
            <Link to='/account'>
              <button className='text-white px-4  py-2 mr-4  hover:border-b-2'>Account</button>
            </Link>
            <button onClick={handleLogout} className='bg-violet-600 px-6 py-2 rounded border-2 border-white cursor-pointer text-white'>logOut</button>
        </div>
        ) : (
          <div className='flex min-w-max'>
            <Link to='/login'>
              <button className='text-white px-4 py-2 mr-4 hover:border-b-2'>Sign In</button>
            </Link>
            <Link to='/signup'>
            <button className='bg-violet-600 px-6 py-2 rounded border-2 border-white cursor-pointer text-white '>Sign Up</button>
            </Link>
        </div>
        )}

    </div>
  )
}
