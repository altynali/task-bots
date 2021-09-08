import React, { useState } from 'react';
import { actions, platforms, taskTypes } from '../../mocks';
import Select from './Select';
import { useSelector, useDispatch } from 'react-redux';
import { massTasks } from './../../../../redux/actions/task';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  // const { tasks_stats } = useSelector((state) => state.app);

  const platform = platforms.find((ext) => ext.value);
  const action = actions.find((ext) => ext.value);
  //const status = states.find((ext) => ext.value);

  const [currentPlatform, setCurrentPlatform] = useState(platform);
  const [currentAction, setCurrentAction] = useState(action);
  //const [currentStatus, setCurrentStatus] = useState(status);
  const [currentFromDate, setCurrentFromDate] = useState();

  let current;

  const handleDate = (date) => {
    setCurrentFromDate(date);

    current = new Date(date);
    let dd = String(current.getDate()).padStart(2, '0');
    let mm = String(current.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yy = current.getFullYear().toString().substr(-2);

    current = dd + '.' + mm + '.' + yy;
  };

  const handleSubmit = () => {
    const newTask = {
      action: currentAction.value,
      platform: currentPlatform.value,
      //dates: currentFromDate === undefined ? 'all' : current,
    };

    // "tasks_actions": [
    //     {
    //         "task_id": 48,
    //         "action": "top-up-order"
    //     },
    //     {
    //         "task_id": 49,
    //         "action": "pause"
    //     }
    // ]

    //dispatch(massTasks(newTask));
  };

  return (
    <>
      <button
        className='font-bold text-lg flex items-center justify-center py-5 border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-500 w-full h-1/2 outline-none'
        onClick={() => setShowModal(true)}
      >
        Массовые действия
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-full lg:w-3/5 md:w-3/5 xl:w-1/3 my-6'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg flex flex-col w-full bg-defaultGray-100 outline-none focus:outline-none p-4'>
                {/*header*/}
                <div className='flex justify-center p-5 border-b border-solid border-blueGray-200 rounded-t text-gray-700'>
                  <h3 className='text-3xl font-semibold ml-auto'>
                    Массовые действия
                  </h3>
                  <button
                    className='p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className='bg-white p-4 rounded-xl mb-6 w-full font-medium text-defaultGray-300'>
                  <div className='text-lg'>Статистика по заданиям</div>
                  <div className='grid grid-cols-2 gap-2 mt-2'>
                    <span className='text-defaultBlue-300'>
                      Активные: 0{/* {tasks_stats?.in_work} */}
                    </span>
                    <span className='text-green-600'>
                      Выполненные: 0{/* {tasks_stats?.completed} */}
                    </span>
                    <span className='text-red-500'>
                      Остановленные: 0{/* {tasks_stats?.paused} */}
                    </span>
                    <span className='text-red-500'>
                      Отмененные: 0{/* {tasks_stats?.canceled} */}
                    </span>
                    <span className='text-red-500'>
                      Неверные данные: 0{/* {tasks_stats?.wrong_data}{' '} */}
                    </span>
                  </div>
                </div>

                <div className='bg-white p-4 rounded-xl w-full font-medium text-defaultGray-300'>
                  <div className='text-lg'>Действия над заданиями</div>

                  <div className='xl:flex lg:grid md:grid sm:grid flex-col w-full mt-2 grid grid-cols-2'>
                    <div className='xl:flex justify-between mt-2 grid grid-cols-1'>
                      <span className='mt-3'>Выберите действия</span>
                      <span>
                        <Select
                          options={actions}
                          selectedOption={currentAction}
                          handelChange={(event) => {
                            console.log('parent', event);
                            setCurrentAction(event);
                          }}
                        />
                      </span>
                    </div>
                    <div className='xl:flex justify-between mt-2 grid grid-cols-1'>
                      <span className='mt-3'>Выберите платформы</span>
                      <span>
                        <Select
                          options={platforms}
                          selectedOption={currentPlatform}
                          handelChange={(event) => {
                            console.log('parent', event);
                            setCurrentPlatform(event);
                          }}
                        />
                      </span>
                    </div>
                    {/* <div className='xl:flex justify-between mt-2 grid grid-cols-1'>
                      <span className='mt-3'>Выберите статусы</span>
                      <span>
                        <Select
                          options={states}
                          selectedOption={currentStatus}
                          handelChange={(event) => {
                            console.log('parent', event);
                            setCurrentStatus(event);
                          }}
                        />
                      </span>
                    </div> */}

                    <div className='xl:flex justify-between mt-2 grid grid-cols-1'>
                      <span className='mt-3'>Добавленные до</span>
                      <span>
                        <input
                          type='date'
                          value={currentFromDate}
                          onChange={(e) => handleDate(e.target.value)}
                          className='cursor-default relative w-48 rounded-md border border-gray-300 bg-white pl-3 py-2 text-left transition ease-in-out duration-150 mt-1 mr-4'
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className='flex items-center p-4 border-t border-solid border-blueGray-200 rounded-b my-4'>
                  <button
                    className='font-bold text-lg flex items-center justify-center py-1 border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-500 w-full'
                    onClick={handleSubmit}
                  >
                    Выполнить
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
