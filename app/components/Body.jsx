import Image from 'next/image'
import React from 'react'

const Body = () => {
  return (
    <div className='flex p-10 items-center'>
      <div style={{flex:3}}>
        <div>
          <Image src="/facebook.png" alt="" width={300} height={300} />
        </div>
        <p className='text-2xl'>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className='ml-10 items-center ' style={{flex:2}}>
        <form className='flex flex-col p-4 shadow-lg rounded-md w-[400px] items-center bg-white'>
          <input
            className='p-4 border-[1px] border-opacity-30 border-gray-500 border-solid outline-sky-500 rounded-md w-[370px]'
            type="text"
            placeholder='Email address or phone number'
          />
          <input
            className='p-4 border-[1px] border-opacity-30 border-gray-500 border-solid outline-sky-500 mt-4 rounded-md w-[370px]'
            type="password"
            placeholder='Password'
          />
          <button className='bg-blue-600 text-white p-3 mt-4 rounded-md w-[370px]' ><b>Log in</b></button>
          <p className='text-blue-500 mt-2 items-center'>Forgotten password</p>
          <hr className='my-4'/>
          <button className='bg-green-500 text-white p-3'>Create new account</button>
        </form>
        <p className='mt-4 text-md items-center'>
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  )
}

export default Body
