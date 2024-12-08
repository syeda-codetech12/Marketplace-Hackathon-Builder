import React from 'react'
import Main from '../components/Main'
import Facilities from '../components/Facilities'

const checkout = () => {
  return (
    <div>
        <div>
        <Main heading='Checkout' page='Checkout'/>
        </div>

        <div className='flex items-center justify-center mb-24'>
        <div className='w-[1100px] flex justify-around mx-20'>
            <div className='w-[500px] '>
                <h1 className='text-4xl font-semibold mb-16'>Billing details</h1>

                <div className='flex gap-8'>
                <div>
                <p className='font-medium mb-8'>First name</p>
                <input type="text" className='w-[210px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>
                </div>

                <div>
                <p className='font-medium mb-8'>Last name</p>
                <input type="text" className='w-[210px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>
                </div>
                </div>

                <p className='font-medium mb-8'>Company Name (Optional)</p>
                <input  className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl  '/>


                <p className='font-medium mb-8'>Country / Region</p>
                <select name="" id="" className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl px-5'>
                    <option value="">Srilanka</option>
                    <option value="">Pakistan</option>
                </select>

                <p className='font-medium mb-8'>Street address</p>
                <input type="text" className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>

                <p className='font-medium mb-8'>Town / City</p>
                <input type="text" className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>

                <p className='font-medium mb-8'>Province</p>
                <select name="" id="" className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl px-5'>
                    <option value="Western Province">Western Province</option>
                    <option value="Eastern Province">Eastern Province</option>
                    <option value="South Province">North Province</option>
                </select>

                <p className='font-medium mb-8'>ZIP code</p>
                <input type="text" className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>

                <p className='font-medium mb-8'>Phone</p>
                <input type="text" className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>
                
                <p className='font-medium mb-8'>Email address</p>
                <input type="text" className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl'/>

                <input type="text" placeholder='Additional Information' className='w-[450px] h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 mt-10'/>
                
               
                </div>
            <div className='w-[475px] '>
                <div className='flex justify-between mb-8'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl font-medium'>Product</h1>
                        <div><span className='text-[#9F9F9F] inline'>Asgaard sofa</span><span className='inline'> x 1</span></div>
                        <p>Subtotal</p>
                        <p>Total</p>
                    </div>
                    <div className='flex flex-col gap-5 justify-end items-end'>
                        <h1 className='text-2xl font-medium'>Subtotal</h1>
                        <span className='text-[#9F9F9F] inline'>Rs. 250,000.00</span>
                        <p>Rs. 250,000.00</p>
                        <p className='text-[#B88E2F] text-2xl font-bold'>Rs. 250,000.00</p>
                    </div>
                </div>

               <li className='w-[474px] border-[#9F9F9F] border-t-[1px]  pt-5 mb-5'>Direct Bank Transfer</li>
                <p className='w-[475px] text-[#9F9F9F] font-light mb-5 text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                <input type="radio" className=' text-[#9F9F9F] mr-2'/><span  className='text-[#9F9F9F] font-medium'>Direct Bank Transfer</span> 
                <br />
                <input type="radio" className=' text-[#9F9F9F] mb-10 mr-1'/> <span className='text-[#9F9F9F] font-medium'>Cash On Delivery</span>

                

                <p className='text-justify w-[475px] font-light mb-8'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong> .</p>
                <div>
                <button className='w-[315px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16'>Place Order</button>
                </div>
                </div>
                </div>
                </div>
                <div className='mb-20'>
                    <Facilities/>
                </div>
        </div>
  )
}

export default checkout