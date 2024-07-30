import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InspirePage = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');

  const handleGenerateIdea = () => {
    navigate('idea', { state: { topic } });
  }

  return (
    <div className='flex-1 p-20'>
      <div className='w-fit max-w-[430px]'>
        <h1 className='font-bold text-2xl'>Get Inspried</h1>
        <p className='my-10 text-sm'>
          Stick staring at a blank page? Tell us what topic you have in mind and Skipli AI will generate a list of post
          ides and captions for you.
        </p>
        <div className='flex flex-col'>
          <label htmlFor='topic' className='mb-2'>
            What topic do you want ideas for?
          </label>
          <input
            id='topic'
            type='text'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder='Enter a topic'
            className='border rounded-md px-3 py-2 min-w-[400px]'
          />
        </div>
        <div className='flex justify-end my-2'>
          <button onClick={handleGenerateIdea} className='py-3 px-6 bg-[#E8EDFF] rounded-md hover:opacity-90'>
            Generate ideas
          </button>
        </div>
      </div>
    </div>
  );
};

export default InspirePage;
