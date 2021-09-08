import { useSelector } from 'react-redux';
import ClipboardCopyIcon from '@heroicons/react/outline/ClipboardCopyIcon';
import React from 'react';
import { user } from './../../../mocks/mock';

const Settings = () => {
  // const { user } = useSelector((state) => state.app);
  return (
    <div className={'bg-gray-700 p-4 rounded-xl mb-6 text-gray-100'}>
      <div className='font-medium text-xl pb-4 border-b border-defaultGray-100'>
        Ваши настройки
      </div>
      <div className='font-medium text-md py-4 border-b border-defaultGray-100 flex justify-center'>
        <div>
          <div className='mb-2'>Логин</div>
          <div className='w-72'>{user.username}</div>
        </div>
      </div>
      <div className='font-medium text-md py-4 border-b border-defaultGray-100 flex justify-center'>
        <div>
          <div className='mb-2'>Email</div>
          <input
            type='text'
            className=' text-gray-700 w-72 rounded-lg border-defaultGray-200 focus:border-defaultGray-200 ring-defaultGray-200 focus:ring-defaultGray-200'
            value={user.email}
            readOnly={true}
          />
        </div>
      </div>
      <div className='font-medium text-md py-4 flex justify-center'>
        <div>
          <div className='mb-2'>Ваш API ключ</div>
          <div className={'relative'}>
            <div
              className='absolute right-1 top-1 w-8 h-8 cursor-pointer text-defaultGray-100 hover:text-defaultGray-100 bg-defaultGray-50 rounded-md flex items-center justify-center'
              onClick={() => {
                navigator.clipboard.writeText(user.api_key);
              }}
            >
              <ClipboardCopyIcon className={'w-6 h-6'} />
            </div>
            <input
              type='text'
              className='w-72 text-gray-700 rounded-lg border-defaultGray-200 focus:border-defaultGray-200 ring-defaultGray-200 focus:ring-defaultGray-200'
              value={user.api_key}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
