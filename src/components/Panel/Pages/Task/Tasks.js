import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../partials/Loading';
import { SearchIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../../../../redux/actions/task';
import Select from './Select';
import { platforms, taskTypes, listTypes } from '../../mocks';
import Modal from './ModalTasks';
import Task from './Task';
import NoTask from './NoTask';
import Pagination from './Pagination';
import { tasks, services } from '../../../mocks/mock';

const TaskPage = ({ setOpenCreateTask }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);

  const platform = platforms.find((ext) => ext.value);
  const taskType = taskTypes.find((ext) => ext.value);
  const listType = listTypes.find((ext) => ext.value);
  //const fromDate = extensions.find((ext) => ext.value);

  const [currentPlatform, setCurrentPlatform] = useState(platform);
  const [currentTaskType, setCurrentTaskType] = useState(taskType);
  const [currentListType, setCurrentListType] = useState(listType);
  const [currentSearch, setSearch] = useState('');

  //const [currentFromDate, setCurrentFromDate] = useState();

  // const { tasksLoaded, count } = useSelector((state) => state.task);
  let count = 50;
  let tasksLoaded = true;

  // const { globalData } = useSelector((state) => state.app);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // dispatch(fetchTasks((currentPage - 1) * 25));
    //console.log(currentPage);
  }, [currentPage]);

  const taskTypeTranslation = {
    like: {
      full: 'Лайки',
    },
    view: {
      full: 'Просмотры',
    },
    follow: {
      full: 'Подписчики',
    },
    comment: {
      full: 'Комментарии',
    },
    vote: {
      full: 'Голоса',
    },
    repost: {
      full: 'Репосты',
    },
  };

  return (
    <>
      {tasksLoaded ? (
        <>
          <div className='bg-gray-700 p-4 rounded-xl mb-6 '>
            <div className='justify-between grid grid-cols-1 xl:flex lg:flex md:flex sm:flex '>
              <div className='w-70 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-72 px-4 py-1 mt-2 border-2 bg-white border-indigo-500 rounded-sm mb-6 flex'>
                <SearchIcon className='h-7 w-7 text-indigo-500 mr-2 mt-1' />
                <input
                  placeholder='Поиск по ID'
                  className='focus:outline-none outline-none cursor-pointer w-full text-gray-600 border-none'
                  type='text'
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className='w-52 mt-3'>
                <Modal />
              </div>
            </div>

            <hr />
            <div className='w-full xl:w-5/12 grid grid-cols-1 ml-7 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-10 justify-between xl:flex lg:grid md:grid sm:grid xs:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 py-3 mt-2 items-center '>
              <div className='ml-0 xl:ml-0 lg:ml-16 md:ml-16 xl:mt-0 lg:mt-2'>
                <label className='text-gray-100'>Выбрать дату</label>
                <Select
                  options={listTypes}
                  selectedOption={currentListType}
                  handelChange={(event) => {
                    //console.log('parent', event);
                    setCurrentListType(event);
                  }}
                />
              </div>

              <div className='ml-0 xl:ml-0 lg:ml-16 md:ml-16 xl:mt-0 lg:mt-2'>
                <label className='text-gray-100'>Выбрать платформу</label>
                <Select
                  options={platforms}
                  selectedOption={currentPlatform}
                  handelChange={(event) => {
                    console.log('parent', event);
                    setCurrentPlatform(event);
                  }}
                />
              </div>
              <div className='ml-0 xl:ml-0 lg:ml-16 md:ml-16 xl:mt-0 lg:mt-2'>
                <label className='text-gray-100'>Выбрать услугу</label>
                <Select
                  options={taskTypes}
                  selectedOption={currentTaskType}
                  handelChange={(event) => {
                    console.log('parent', event);
                    setCurrentTaskType(event);
                  }}
                />
              </div>
            </div>
          </div>
          {tasks?.length ? (
            <>
              <Task
                tasks={tasks}
                setSearch={setSearch}
                setCurrentListType={setCurrentListType}
                setCurrentPlatform={setCurrentPlatform}
                setCurrentTaskType={setCurrentTaskType}
                currentSearch={currentSearch}
                currentPlatform={currentPlatform}
                currentTaskType={currentTaskType}
                listType={currentListType}
                services={services}
                taskTypeTranslation={taskTypeTranslation}
              />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={count} //{posts.length }
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          ) : (
            <NoTask setOpenCreateTask={setOpenCreateTask} />
          )}
        </>
      ) : (
        <div className={'bg-defaultGray-50 p-4 rounded-xl mb-6'}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default TaskPage;
