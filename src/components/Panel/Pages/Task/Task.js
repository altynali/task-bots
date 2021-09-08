import ChangeButton from './ChangeButton';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { listTypes, platforms, taskTypes } from '../../mocks';

const Task = ({
  tasks,
  setSearch,
  setCurrentListType,
  setCurrentPlatform,
  setCurrentTaskType,
  currentSearch,
  currentPlatform,
  currentTaskType,
  listType,
  services,
  taskTypeTranslation,
}) => {
  // const { tasks } = useSelector((state) => state.task);

  const [tasksModified, setTasksModified] = useState(tasks);

  useEffect(() => {
    const myDataDesc = []
      .concat(tasksModified)
      .sort((a, b) => (a.created < b.created ? 1 : -1));

    const myDataAsc = []
      .concat(tasksModified)
      .sort((a, b) => (a.created > b.created ? 1 : -1));

    if (listType.id === '1') setTasksModified(myDataDesc);
    else if (listType.id === '2') setTasksModified(myDataAsc);
  }, [listType]);

  useEffect(() => {
    let foundTasks = [];

    if (currentSearch !== '') {
      tasksModified.map((task) => {
        if (task.id.toString().includes(currentSearch)) foundTasks.push(task);
      });
      if (foundTasks.length === 0) {
        tasks.map((task) => {
          if (task.id.toString().includes(currentSearch)) foundTasks.push(task);
        });
      }
      setTasksModified(foundTasks);
    } else {
      setCurrentListType(listTypes[0]);
      setCurrentPlatform(platforms[0]);
      setCurrentTaskType(taskTypes[0]);
      setTasksModified(tasks);
      setSearch('');
    }
  }, [currentSearch]);

  useEffect(() => {
    let foundTasks = [];

    if (currentPlatform.value !== 'all') {
      tasksModified.map((task) => {
        if (task.platform === currentPlatform.value) foundTasks.push(task);
      });
      if (foundTasks.length === 0) {
        tasks.map((task) => {
          if (task.platform === currentPlatform.value) foundTasks.push(task);
        });
      }
      setTasksModified(foundTasks);
    } else {
      setCurrentListType(listTypes[0]);
      setCurrentTaskType(taskTypes[0]);
      setCurrentPlatform(platforms[0]);
      setTasksModified(tasks);
      setSearch('');
    }
  }, [currentPlatform]);

  useEffect(() => {
    let foundTasks = [];

    if (currentTaskType.value !== 'all') {
      tasksModified.map((task) => {
        if (task.task_type === currentTaskType.value) foundTasks.push(task);
      });
      if (foundTasks.length === 0) {
        tasks.map((task) => {
          if (task.task_type === currentTaskType.value) foundTasks.push(task);
        });
      }
      setTasksModified(foundTasks);
    } else {
      setCurrentListType(listTypes[0]);
      setCurrentTaskType(taskTypes[0]);
      setCurrentPlatform(platforms[0]);
      setTasksModified(tasks);
      setSearch('');
    }
  }, [currentTaskType]);

  return (
    <div className={'bg-gray-700 p-4 rounded-xl mb-6'}>
      <div className='text-lg xl:text-sm lg:text-sm md:text-sm font-bold text-defaultGray-100 grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2 xl:flex lg:flex md:grid sm:grid items-center p-3'>
        <div className={'w-1/3'}>ID / Дата</div>
        <div className={'w-full xl:w-1/3 lg:w-1/3 -ml-0 xl:-ml-28 lg:-ml-28'}>
          Ссылка / Услуга
        </div>
        <div className={'w-full xl:w-1/3 lg:w-1/3 -ml-0 xl:-ml-14 lg:-ml-14'}>
          Статус / Прогресс
        </div>
      </div>

      {tasksModified.map((task) => {
        let date = new Date(task.created);

        function formatDate(date) {
          var dd = date.getDate();
          if (dd < 10) dd = '0' + dd;
          var mm = date.getMonth() + 1;
          if (mm < 10) mm = '0' + mm;
          var yy = date.getFullYear() % 100;
          if (yy < 10) yy = '0' + yy;
          return dd + '.' + mm + '.' + yy;
        }

        let dateStr = formatDate(date);
        let progress = Math.ceil(task.got / task.count);
        let taskStatusToProgressBar = {
          not_payed: (
            <div className={'flex items-center w-34'}>
              <div className='bg-defaultGray-100 overflow-hidden w-36 rounded-full mr-2'>
                <div
                  className='bg-defaultGray-100 text-sm leading-none py-1 text-center text-defaultGray-300'
                  style={{ width: '100%' }}
                >
                  Не оплачен
                </div>
              </div>
            </div>
          ),
          wrong_data: (
            <div className={'flex items-center w-34'}>
              <div className='bg-defaultGray-100 overflow-hidden w-36 rounded-full mr-2'>
                <div
                  className='bg-red-00 text-sm leading-none py-1 text-center text-defaultGray-300'
                  style={{ width: '100%' }}
                >
                  Неверные данные
                </div>
              </div>
            </div>
          ),
          in_work: (
            <div className={'flex items-center w-34'}>
              <div className='bg-defaultGray-100 overflow-hidden w-28 rounded-full mr-2'>
                <div
                  className='bg-defaultGray-200 text-sm leading-none py-1 text-center text-defaultGray-300'
                  style={{ width: progress + '%' }}
                >
                  {progress}%
                </div>
              </div>
              <div className='text-defaultGray-200 text-sm'>
                {task.got} / {task.count}
              </div>
            </div>
          ),
          paused: (
            <div className={'flex items-center w-34'}>
              <div className='bg-defaultGray-100 overflow-hidden w-28 rounded-full mr-2'>
                <div
                  className='bg-yellow-400 text-sm leading-none py-1 text-center text-defaultGray-300'
                  style={{ width: '100%' }}
                >
                  Приостановлен
                </div>
                <div className='text-defaultGray-200 text-sm'>
                  {task.got} / {task.count}
                </div>
              </div>
            </div>
          ),
          completed: (
            <div className={'flex items-center w-34'}>
              <div className='bg-defaultGray-100 overflow-hidden w-28 rounded-full mr-2'>
                <div
                  className='bg-green-500 text-sm leading-none py-1 text-center text-defaultGray-300'
                  style={{ width: '100%' }}
                >
                  Завершён
                </div>
                <div className='text-defaultGray-200 text-sm'>
                  {task.got} / {task.count}
                </div>
              </div>
            </div>
          ),
        };
        let taskService = services[0][task.service];
        return (
          <div
            className={
              'w-full p-3 border-t border-defaultGray-100 grid gap-4 sm:grid-cols-2 lg:flex lg:flex-row items-center justify-between text-lg xl:text-sm lg:text-sm'
            }
          >
            <div className='flex flex-col w-20'>
              <div className='cursor-pointer text-defaultGray-100 text-lg xl:text-sm lg:text-sm'>
                {task.id}
              </div>
              <div className='text-gray-400 text-md xl:text-sm lg:text-sm'>
                {dateStr}
              </div>
            </div>

            <div className='flex flex-col w-32 text-lg xl:text-sm lg:text-sm'>
              <div className='cursor-pointer text-defaultGray-100 '>
                {task.platform}
              </div>
              <a
                href={task.url}
                target={'_blank'}
                className='cursor-pointer text-defaultGray-100'
              >
                Перейти
              </a>
              <div className='text-indigo-300 font-bold'>
                {taskTypeTranslation[taskService.task_type].full}{' '}
                {taskService.name_append}
              </div>
            </div>
            <span>{taskStatusToProgressBar[task.status]}</span>
            <ChangeButton id={task.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Task;
