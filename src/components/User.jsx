import React from 'react';

const User = ({data}) => {
  return (
    <div>
        <div className=' flex justify-center items-center h-[100vh]'>
            <h1 className=' text-6xl flex items-center'>Welcome to Home. {data} You Logged In successfully</h1>
        </div>
    </div>
  )
}

export default User