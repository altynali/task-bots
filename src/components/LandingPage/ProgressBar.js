import React from 'react';

export const ProgressBar = () => {
  return (
    <div className=' pt-1 w-1/4'>
      <div className='flex mb-2 items-center'>
        <div className='text-right'>
          <span className='text-xs font-semibold inline-block text-indigo-600'>
            30%
          </span>
        </div>
      </div>
      <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200'>
        <div
          style={{ width: '30%' }}
          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500'
        ></div>
      </div>
    </div>
  );
};
