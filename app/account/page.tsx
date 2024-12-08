import React from 'react'
import Main from '../components/Main'
import Facilities from '../components/Facilities'

const account = () => {
  return (
    <div>
        <div>
        <div>
        <Main heading='Account' page='Account'/>
        </div>
        <div className='flex items-center justify-center mb-24'>
        <div className='w-[1100px] flex justify-between'>
            <div className='w-[500px] '>
                <h1 className='text-4xl font-semibold mb-16'>Log In</h1>
                <p className='font-medium mb-8'>Username or email address</p>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>

                <p className='font-medium mb-8'>Password</p>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>
                <div className='flex gap-5'>
                <div className='w-[30px] h-[27px] border-black border-[1px] rounded-lg'></div>
                <span className=''>Remember Me</span>
                </div>
                <div>
                <button className='w-[215px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-8 inline mr-16'>Log In</button>
                    <span className='font-light capitalize m'>Lost your password?</span>
                </div>
                </div>
            <div className='w-[500px] '>
            <h1 className='text-4xl font-semibold mb-16'>Register</h1>
                <p className='font-medium mb-8'>Email Address</p>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>

               
                <p className='w-[410px]  font-light mb-5'>A link to set a new password will be sent to your email address.</p>
                <p className='w-[450px]  font-light mb-8'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong> .</p>
                <div>
                <button className='w-[215px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16'>Register</button>
                </div>
                </div>
              
                </div>
                </div>
                <div className='mb-20'>
                    <Facilities/>
                </div>
            </div>
        </div>
  )
}

export default account