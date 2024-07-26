import React, { useState } from 'react';
import CardOption from '../../../../components/CardOption';

const ScratchDetailPage = () => {
  const [isGenerateOption, setIsGenerateOption] = useState(true);
  return (
    <>
      <div className='w-full py-4'>
        <div className='w-fit mx-auto max-w-[430px]'>
          <h2 className='text-2xl font-bold mb-6'>Facebook post</h2>
          <div className='flex flex-col'>
            <label htmlFor='topic' className='mb-2'>
              What topic do you want a caption for?
            </label>
            <input id='topic' type='text' className='border rounded-md px-3 py-2 min-w-[400px]' />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='sound' className='mb-2'>
              What should your caption sound like?
            </label>
            <select id='sound' className='border roCunded-md px-3 py-2 min-w-[400px]'>
              <option>haha</option>
              <option>hihi</option>
            </select>
          </div>
          <div className='flex justify-end my-2'>
            <button className='py-3 px-6 bg-[#E8EDFF] rounded-md hover:opacity-90'>Generate caption</button>
          </div>
          {isGenerateOption && (
            <div className='w-fit'>
              <h2 className='text-2xl font-bold mb-6'>Captions generated for you</h2>
              <CardOption
                content='Introducing Skipli AI - the smarter, faster way to craft
compelling content  Experience all the magic of
 Al-driven wriing assistant and get great results
with fewer headaches.#AI #ContentMarketing #Content'
              />
              <CardOption
                content='Introducing Skipli AI - the smarter, faster way to craft
compelling content  Experience all the magic of
 Al-driven wriing assistant and get great results
with fewer headaches.#AI #ContentMarketing #Content'
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ScratchDetailPage;
