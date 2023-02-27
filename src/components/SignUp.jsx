import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
    
const SignUp = () => {
    const history = useNavigate();
    const formPass = '';
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries());
        formData.password = formPass;
        
        if(!formData.email.includes('@')){
            window.alert('invalid email address')
        }

        if (formData.password !== formData.confirmPassword) {
            window.alert('Passwords must be Same');
        }

        if (formData.password.length <= 8){
            window.alert('Password must be more than 8 characters')
        }

        else{
    
            fetch('http://localhost:5000/formdata', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(formData)
            })
            .then(() => console.log('formdata sent successfully', formData))
            .then(() => history('/success'))
            .catch((err) => console.log('Failed to send data', err));
            
        }
        
        
        
    }



  return (
    <div>
        <div className=' bg-slate-300 h-[100vh] flex justify-center items-center'>
            <form action="" method="post" className=' bg-slate-50 p-6 pl-10 pr-10 rounded-md' autoComplete='true' onSubmit={handleSubmit}>
                <h1 className=' flex justify-center text-2xl font-bold mb-3'>SignUp</h1>
                <div className='flnames flex flex-col'>
                    <label htmlFor="Firstname">Firstname</label>
                    <input type="text" name='firstname' placeholder='John' className='w-[320px] outline-none p-2 rounded-md' autoComplete='true' />
                    <label htmlFor="Lastname" className=' mt-2'>Lastname</label>
                    <input type="text" name='lastname' placeholder='Doe' className='w-[320px] outline-none p-2 rounded-md' />
                    <label htmlFor="email" className=' mt-2'>Email</label>
                    <input type="text" name='email' placeholder='johndoe@gmail.com' className='w-[320px] outline-none p-2 rounded-md' />
                    <label htmlFor="Password" className=' mt-2'>Password</label>
                    <input type="password" name='password' className='w-[320px] outline-none p-2 rounded-md' placeholder='************' autoComplete='false' />
                    
                    <label htmlFor="conform_password" className=' mt-2 ml-2'>Conform Password</label>
                    <input type="password" name='confirmPassword' className='w-[320px] outline-none p-2 rounded-md' placeholder='************' autoComplete='false' />
                </div>
                <div>
                    <button type='submit' className=' bg-black text-white p-2 w-[320px] mt-3 hover:bg-green-700 hover:text-black hover:duration-150 rounded-md'>SignUp</button>
                    <p className=' mt-2 text-blue-700 text-xs hover:underline cursor-pointer'> <Link to='/login'>already registered? Login</Link> </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp