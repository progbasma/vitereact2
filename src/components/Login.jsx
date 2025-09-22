import React from 'react'
import { useRef } from 'react'
const Login = () => {

    const userref=useRef(null);
    const passwordref=useRef(null);

    const handlelogin=(e)=>{
        e.preventDefault()
        console.log(userref.current.value);
        console.log(passwordref.current.value);

    }

  return (
    <>
    <form action="" onSubmit={handlelogin}>
        <input type="text" placeholder='username' ref={userref} />
        <input type="password" placeholder='password'  ref={passwordref}/>
        <button>Login</button>
    </form>
    
    </>
  )
}

export default Login