import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { AiOutlineUser } from 'react-icons/ai';

const ConfirmOtpPage = () => {
  return (
    <div className='flex gap-10 items-center justify-center'>
      <img src={Logo} alt='Skipli' className='w-[200px] h-[200px]' />
      <div className='w-[430px]'>
        <div className='w-24 h-24 bg-slate-100 flex items-center justify-center mb-8'>
          <AiOutlineUser size={100} />
        </div>
        <h1 className='text-4xl font-bold mb-6'>Welcome to Skipli AI</h1>
        <p>SkipliAI has sent an OTP code to: +1 2346789121</p>
        <input
          type='text'
          placeholder='Enter your code here'
          className='rounded-md border border-gray-400 p-3 outline-none w-full my-10'
        />
        <button className='bg-[#87A1FF] py-3 w-full rounded-md hover:opacity-95'>Submit</button>
      </div>
    </div>
  );
};

export default ConfirmOtpPage;
