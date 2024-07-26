import React from 'react';
import Card from '../../../components/Card';
import { BsFacebook } from 'react-icons/bs';

const ScratchPage = () => {
  return (
    <div className='flex-1 p-20'>
      <div className='w-fit'>
        <h1 className='font-bold text-2xl'>Generate unique captions from scratch</h1>
        <p className='my-10 max-w-[440px]'>
          Choose the type of post you want a caption for, and let Skipli Al writeit for you
        </p>
        <p className='mb-8'>What kind of post do you want a caption for?</p>
        <Card
          Icon={BsFacebook}
          to='facebook'
          title='Facebook post'
          description='Generate caption for a post'
          isHasBorder={true}
        />
      </div>
    </div>
  );
};

export default ScratchPage;
