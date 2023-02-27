import React from 'react';
import { Link } from 'react-router-dom';

const Registered = () => {
  return (
    <div>
        <div className=' flex items-center h-screen justify-center'>
            <h1 className=' text-6xl flex justify-center items-center'>Registered Successfully. Wanna &ensp;  <Link to= '/login' className=' underline text-blue-700'> Login</Link> </h1>
        </div>
    </div>
  )
}

export default Registered