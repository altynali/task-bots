import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { taskAction } from '../../../../redux/actions/task';

const ChangeButton = ({ id }) => {
  const [openChange, setOpenChange] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className='grid w-40 text-gray-100'>
      <button
        className='bg-indigo-500 hover:bg-indigo-600 w-full rounded-full mr-2 py-1 outline-none'
        onClick={() => setOpenChange(!openChange)}
      >
        Изменить
      </button>
      <div
        className={
          'p-4 rounded-lg grid grid-cols-1 absolute mt-5 ' +
          (openChange ? 'down-popup' : 'hidden')
        }
      >
        <button
          className='bg-indigo-500 w-32 rounded border-2 border-gray-800 py-1 button1'
          onClick={() => dispatch(taskAction(id, 'continue'))}
        >
          Продолжить
        </button>
        <button
          className='bg-indigo-500 w-32 rounded border-2 border-gray-800 py-1 button2'
          onClick={() => dispatch(taskAction(id, 'pause'))}
        >
          Остановить
        </button>
        <button
          className='bg-indigo-500 w-32 rounded border-2 border-gray-800 py-1 button3'
          onClick={() => dispatch(taskAction(id, 'top-up-order'))}
        >
          Продвинуть
        </button>
        <button
          className='bg-indigo-500 w-32 rounded border-2 border-gray-800 py-1 button4'
          onClick={() => dispatch(taskAction(id, 'refill'))}
        >
          Пополнить
        </button>
        <button
          className='bg-indigo-500 w-32 rounded border-2 border-gray-800 py-1 button5'
          onClick={() => dispatch(taskAction(id, 'cancel'))}
        >
          Отменить
        </button>
        <button
          className='bg-indigo-500 w-32 rounded border-2 border-gray-800 py-1 button6'
          onClick={() => dispatch(taskAction(id, 'delete'))}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ChangeButton;
