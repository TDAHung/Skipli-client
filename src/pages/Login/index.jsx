import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { AiOutlineUser } from 'react-icons/ai';

const LoginPage = () => {
  return (
    <div className='flex gap-10 items-center justify-center'>
      <img src={Logo} alt='Skipli' className='w-[200px] h-[200px]' />
      <div className='w-[430px]'>
        <div className='w-24 h-24 bg-slate-100 flex items-center justify-center mb-8'>
          <AiOutlineUser size={100} />
        </div>
        <h1 className='text-4xl font-bold mb-6'>Welcome to Skipli AI</h1>
        <p>Enter a mobile phone number that you have access to.</p>
        <p>This number will be use to login to SkipliAI.</p>
        <div className='rounded-md border border-gray-400 flex gap-1 mt-6 mb-10 relative'>
          <input type='text' placeholder='+1' className='w-14 p-2 rounded-md text-center outline-none' />
          <div className='w-[0.5px] h-12 bg-gray-400 absolute left-14'></div>
          <input type='text' className='p-3 flex-1 hover:border-0 rounded-md  outline-none' />
        </div>
        <button className='bg-[#87A1FF] py-3 w-full rounded-md hover:opacity-95'>Send Verification Code</button>
      </div>
    </div>
  );
};

export default LoginPage;
