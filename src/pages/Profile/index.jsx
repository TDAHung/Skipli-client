import React from 'react';
import CardOption from '../../components/CardOption';

const ProfilePage = () => {
  return (
    <div className='flex-1 p-20'>
      <div className='w-full'>
        <h1 className='font-bold text-2xl'>Saved Content</h1>
        <div className='mt-10'>
          <div className=''>
            <p className=' font-semibold mb-4'>Skipli is launching SkipliAI</p>
            <div className='grid grid-cols-2 gap-20'>
              <CardOption
                isUnsave={true}
                content='Introducing Skipli AI - the smarter, faster way to craft
compelling content  Experience all the magic of
 Al-driven wriing assistant and get great results
with fewer headaches.#AI #ContentMarketing #Content'
              />
              <CardOption
                isUnsave={true}
                content='Introducing Skipli AI - the smarter, faster way to craft
compelling content  Experience all the magic of
 Al-driven wriing assistant and get great results
with fewer headaches.#AI #ContentMarketing #Content'
              />
            </div>
          </div>
          <div className=''>
            <p className=' font-semibold mb-4'>Skipli is launching SkipliAI</p>
            <div className='grid grid-cols-2 gap-20'>
              <CardOption
                isUnsave={true}
                content='Introducing Skipli AI - the smarter, faster way to craft
compelling content  Experience all the magic of
 Al-driven wriing assistant and get great results
with fewer headaches.#AI #ContentMarketing #Content'
              />
              <CardOption
                isUnsave={true}
                content='Introducing Skipli AI - the smarter, faster way to craft
compelling content  Experience all the magic of
 Al-driven wriing assistant and get great results
with fewer headaches.#AI #ContentMarketing #Content'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
