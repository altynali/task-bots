import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { newTask } from '../../../../redux/actions/task';
import { platformTranslation } from '../../mocks';
import StatisticHover from './StatisticHover';
import { services, user } from './../../../mocks/mock';

const Platform = ({
  activePlatform,
  handlePlatform,
  newTaskUrlError,
  setTaskUrlError,
  taskUrl,
}) => {
  // const { globalData, services, user } = useSelector((state) => state.app);

  const [step, setStep] = useState(1);
  const [chosenService, setChosenService] = useState('');
  const [chosenTaskType, setChosenTaskType] = useState('');
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  let price = chosenService.placement * count;
  let balance = user.points;
  let change = balance - price;

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

  const sortingArray = ['like', 'view', 'follow', 'comment', 'vote', 'repost'];

  let activeServices = [];

  console.log(services);

  activeServices = Object.values(services[0]);

  activeServices.sort(function (a, b) {
    return (
      sortingArray.indexOf(a.task_type) - sortingArray.indexOf(b.task_type)
    );
  });

  activeServices.sort((a, b) => {
    if (a.task_type === b.task_type)
      return a.placement > b.placement ? 1 : b.placement > a.placement ? -1 : 0;
  });

  let likes = [],
    views = [],
    follows = [],
    comments = [],
    votes = [],
    reposts = [];

  activeServices.map((active) => {
    if (active.task_type === 'like') likes.push(active);
    if (active.task_type === 'view') views.push(active);
    if (active.task_type === 'follow') follows.push(active);
    if (active.task_type === 'comment') comments.push(active);
    if (active.task_type === 'vote') votes.push(active);
    if (active.task_type === 'repost') reposts.push(active);
  });

  // console.log(likes, views, follows, comments, votes, reposts);

  const sendNewTask = (pay) => {
    if (!newTaskUrlError) {
      const newTaskData = {
        platform: chosenService.platform,
        service: chosenService.id,
        count,
        custom_service: chosenService.custom_service,
        extra: chosenService.extra,
        pay,
        url: taskUrl,
      };
      dispatch(newTask(newTaskData));
    }
  };

  return (
    <>
      {step === 1 ? (
        <div className='font-medium bg-gray-700 rounded-lg mb-4'>
          <div className='horizontal-scroller overflow-y-hidden pb-2 mb:pb-0'>
            <div className='flex items-start justify-start w-max'>
              {platformTranslation.map((platform, i) => (
                <div
                  className={'border-t border-defaultGray-100 cursor-pointer'}
                  key={i}
                >
                  <div
                    className={
                      'flex items-center justify-center border-b-2 border-transparent py-3 mx-4 cursor-pointer ' +
                      (platform.short === activePlatform.short
                        ? 'border-indigo-300 text-indigo-300'
                        : ' text-gray-200 hover:text-gray-100')
                    }
                    onClick={() => {
                      handlePlatform(platform);
                    }}
                  >
                    {platform.full === 'Все платформы' ? null : (
                      <img
                        className='w-5 h-5 rounded-full mr-2'
                        src={platform.image}
                        alt={platform.image}
                      />
                    )}
                    <span>{platform.short}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {step === 1 ? (
        <div>
          <div className='font-medium bg-gray-700 rounded-lg p-4 pb-0 mt-4'>
            <div className='text-sm flex items-center mb-3 text-gray-100'>
              {activePlatform.platform !== 'all' && (
                <img
                  className={'w-6 h-6 rounded-md mr-2'}
                  src={activePlatform.image}
                  alt={activePlatform.image}
                />
              )}
              <div>{activePlatform.full}</div>
            </div>
            <div
              className={
                'flex items-center justify-between text-sm text-defaultGray-100 mb-2'
              }
            >
              <div>Название</div>
              <div className='mr-12 xl:mr-44 lg:mr-44 md:mr-44 sm:mr-32'>
                Цена
              </div>
            </div>
            {activeServices.map((service) =>
              activePlatform.platform === 'all' ||
              service.platform === activePlatform.platform ? (
                <div
                  className={
                    'flex items-center justify-between py-3 border-t border-defaultGray-100 cursor-pointer'
                  }
                  onClick={() => {
                    setStep(2);
                    setChosenTaskType(taskTypeTranslation[service.task_type]);
                    setChosenService(service);
                  }}
                >
                  <div className='flex items-center content-start text-defaultGray-100'>
                    <img
                      className={'w-8 h-8 mr-2'}
                      src={taskTypeTranslation[service.task_type]?.image}
                      alt={taskTypeTranslation[service.task_type]?.image}
                    />
                    <div className='flex flex-col items-start content-center '>
                      <div>
                        {taskTypeTranslation[service.task_type]?.full}{' '}
                        {service.name_append}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      'flex items-center justify-between xl:w-40 lg:w-40 md:w-40 sm:w-20 text-gray-100'
                    }
                  >
                    <div className='-ml-20 xl:-ml-12 lg:-ml-12 md:-ml-12 sm:-ml-20'>
                      {service.placement}
                    </div>
                    <StatisticHover
                      tasks={service.stats.tasks}
                      volume={service.stats.volume}
                      service={service}
                    />

                    <ChevronRightIcon className={'w-4 h-4 text-indigo-100'} />
                  </div>
                </div>
              ) : null
            )}
          </div>
          )
        </div>
      ) : null}
      {step === 2 ? (
        <div className={'font-medium bg-gray-700 rounded-lg p-4 pb-0 mt-4'}>
          <div
            className='flex items-center justify-start text-indigo-100 cursor-pointer mb-2'
            onClick={() => {
              setStep(1);
            }}
          >
            <ChevronLeftIcon className={'w-4 h-4 mr-1'} />
            <div className={'text-sm'}>Назад к услугам</div>
          </div>
          <div
            className={
              'flex items-center justify-between py-3 border-b border-defaultGray-100'
            }
          >
            <div className={'flex items-center content-start'}>
              <img className='w-8 mr-2' src={chosenTaskType.image_url} />
              <div className='flex flex-col items-start content-center'>
                <div className={'text-defaultGray-100'}>
                  {chosenTaskType.full} {chosenService.name_append}
                </div>
              </div>
            </div>
            <div className={'flex items-center'}>
              <div>{chosenService.placement?.toLocaleString()}</div>
            </div>
          </div>

          <div className='px-2 py-3'>
            <div className='text-defaultGray-100 text-sm mb-2'>Описание</div>
            <div className={'text-defaultGray-100 text-sm mb-4'}>
              {chosenService.description} Минимум - 1. Максимум -{' '}
              {chosenService.max}.
            </div>
            <div className='flex items-center justify-between text-sm text-defaultGray-100 mb-2'>
              <div>Количество</div>
              <div className={'hidden sm:block'}>
                {chosenService.placement} поинтов за 1 шт
              </div>
            </div>
            <input
              className={'rounded-lg w-full focus:border-indigo-100 mb-3'}
              type='number'
              name={'count'}
              value={count}
              step={1}
              min={1}
              max={chosenService.max}
              onChange={(e) => {
                setCount(e.target.value);
              }}
            />
            <div className='flex items-center justify-between text-md py-2 border-t border-defaultGray-100'>
              <div className='text-defaultGray-100'>Стоимость</div>
              <div className='text-defaultGray-100 flex items-center'>
                <div className={'mr-1'}>
                  {price.toFixed(2).toLocaleString()}
                </div>
                <div>поинтов</div>
              </div>
            </div>
            <div
              className={
                'flex items-center justify-between text-md py-2 border-t border-defaultGray-100 ' +
                (price > balance ? '' : 'border-b')
              }
            >
              <div className='text-defaultGray-100'>Доступно</div>
              <div className='text-green-500 flex items-center'>
                <div className={'mr-1'}>{balance.toLocaleString()}</div>
                <div>поинтов</div>
              </div>
            </div>
            {price > balance ? (
              <>
                <div className='flex items-center justify-between text-md py-2 border-t border-b border-defaultGray-100'>
                  <div className='text-defaultGray-100'>
                    Недостаточно поинтов
                  </div>
                  <div className='text-red-500 flex items-center'>
                    <div className={'mr-1'}>
                      {change.toFixed(2).toLocaleString()}
                    </div>
                    <div>поинтов</div>
                  </div>
                </div>
                <div className='text-defaultGray-100 text-center mt-6'>
                  Для продолжения необходимо пополнить ваш баланс
                </div>
                <div className='text-defaultGray-100 text-center mt-3'>
                  Здесь могли быть офферы
                </div>
                <button
                  className='flex items-center justify-center px-4 py-3 mt-6 border border-transparent rounded-lg text-sm font-medium text-defaultGray-300 bg-gray-700 w-full'
                  onClick={() => {
                    sendNewTask(false);
                    if (!taskUrl) {
                      setTaskUrlError(true);
                    }
                  }}
                >
                  Добавить, но оплатить позже
                </button>
              </>
            ) : (
              <div className={'grid sm:grid-cols-2 gap-4 mt-6'}>
                <button
                  className='flex items-center justify-center px-4 py-3 border border-transparent rounded-lg text-sm font-medium text-defaultGray-300 bg-defaultGray-100 w-full'
                  onClick={() => {
                    sendNewTask(false);
                    if (!taskUrl) {
                      setTaskUrlError(true);
                    }
                  }}
                >
                  Добавить, но оплатить позже
                </button>
                <button
                  className='flex items-center justify-center px-4 py-3 border border-transparent rounded-lg text-sm font-medium text-defaultGray-50 bg-indigo-400 hover:bg-indigo-400 w-full'
                  onClick={() => {
                    sendNewTask(true);
                  }}
                >
                  Оплатить и запустить
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Platform;
