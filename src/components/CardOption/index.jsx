import React from 'react';

const CardOption = ({ content, isUnsave }) => {
  return (
    <div className='p-5 rounded-md border border-gray-300 mb-4'>
      <p className='mb-4'>{content}</p>
      <div className='flex gap-3 justify-end'>
        <button className='py-2 px-3 rounded-md hover:opacity-90 bg-blue-300'>Share</button>
        <button className='py-2 px-3 rounded-md hover:opacity-90 bg-gray-300'>{isUnsave ? 'Unsave' : 'Save'}</button>
      </div>
    </div>
  );
};

export default CardOption;
