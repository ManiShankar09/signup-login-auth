import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
      e.preventDefault();

      fetch('http://localhost:5000/login',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({email, password})
      })
      .then(response => response.json())
      .then((res) => {
        if (res.data === 'matched') {
          history('/loggedin')
        }
        if(res.data === 'not matched'){
          window.alert('Incorrect email or password')
        }
      }) 
  }

    return (
    
      <div>
        <div className=' flex justify-center items-center bg-gray-300 h-screen'>
          <form action="post" onSubmit={handleLogin} className=" flex flex-col justify-center bg-white p-7 rounded-md" >
            <label htmlFor="email" className=' mb-2'>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className=' outline-none p-1 rounded-md w-[280px] bg-slate-100' />
            <label htmlFor="password" className=' mt-2'>Password</label>
            <input type="text"  value={password} onChange={(e) => setPassword(e.target.value)} className=' outline-none p-1 rounded-md w-[280px] bg-slate-100 mt-2' />

            <hr className=' mt-5' />
            <div className=' flex justify-center items-center mt-5'>
              <button type="submit" className=' bg-blue-500 p-2 text-white w-[280px] rounded-md'>LogIn</button>
            </div> 
            <p className=' mt-2 text-xs text-blue-500 cursor-pointer hover:underline'>Forgot Password?</p>
            <p className=' mt-2 text-xs text-blue-500 cursor-pointer hover:underline'><Link  to= '/'>Don't have an account? Signup</Link> </p>
          </form>
        </div>
      </div>
    
    )
}

export default Login;