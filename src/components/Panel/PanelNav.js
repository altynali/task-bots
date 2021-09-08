import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import Dropdown from './Dropdown';
import { pagesBuyer, pagesSeller, platformTranslation } from './mocks';
import Platforms from './Pages/Platforms/Platforms';
import { Link } from 'react-router-dom';

const PanelNav = ({
  handleActiveUrl,
  handleActivePage,
  activeRole,
  handleActiveRole,
  createTaskOpened,
  setOpenCreateTask,
}) => {
  // const { globalData } = useSelector((state) => state.app);
  // const { errorLogin } = useSelector((state) => state.login);

  const [taskUrl, setTaskUrl] = useState(null);
  const [newTaskUrlError, setTaskUrlError] = useState(false);

  // const { newTaskUploaded } = useSelector( ( state ) => state.task );

  let pages = [];
  if (activeRole === 'seller') pages = [...pagesSeller];
  else if (activeRole === 'buyer') pages = [...pagesBuyer];

  const [activePlatform, setActivePlatform] = useState(platformTranslation[0]);

  const handlePlatform = (active) => {
    setActivePlatform(active);
  };

  const handleTaskUrl = (url) => {
    if (url === 'https://vk.com/durov')
      setActivePlatform(platformTranslation[3]);
    else if (url === 'https://instagram.com/cristiano')
      setActivePlatform(platformTranslation[1]);

    setTaskUrl(url);
  };

  // useEffect(() => {
  //   setOpenCreateTask(false);
  //   handleActiveUrl('tasks');
  //   handleActivePage(pages[0]);
  //   setTaskUrl('');
  // }, [newTaskUploaded]);

  const renderNewTask = () => {
    return (
      <div className='inline-block align-bottom bg-gray-800 text-defaultGray-300 p-4 rounded-lg text-left shadow-xl transform transition-all my-8 sm:align-middle w-11/12 max-w-xl'>
        <div
          className={
            'mt-2 mb-6 text-2xl font-medium flex items-center justify-center'
          }
        >
          <div className='text-gray-100'>Новое задание</div>
        </div>
        <div className='bg-gray-700 rounded-lg p-4 mb-4'>
          <div className='text-lg font-medium text-gray-100'>
            Введите ссылку на то, что хотите раскрутить
          </div>
          <div className='my-4 rounded-md relative overflow-hidden focus:border-indigo-100 '>
            {activePlatform.platform !== 'all' ? (
              <img
                src={
                  platformTranslation.find(
                    (platform) => platform.platform === activePlatform.platform
                  ).image
                }
                className='absolute z-0 left-0 w-12 h-12  rounded-md'
              ></img>
            ) : null}
            <input
              type='text'
              name='url'
              id='url'
              value={taskUrl}
              className={
                'font-medium text-white placeholder-white border-2 px-6 py-3 h-12 block w-full sm:text-sm bg-gray-700 rounded-md ' +
                (activePlatform.platform !== 'all' ? 'pl-16 ' : ' ') +
                (newTaskUrlError
                  ? 'border-red-500 placeholder-red-500'
                  : 'border-gray-300 placeholder-gray-300')
              }
              placeholder='Ссылка на задание'
              onChange={(e) => {
                setTaskUrl(e.target.value);
                setTaskUrlError(false);
              }}
            />
          </div>
          {activePlatform.platform === 'all' ? (
            <div className='text-sm flex items-center justify-start text-gray-100'>
              <div className='mr-1'>Например:</div>
              <div
                className='mr-1 cursor-pointer text-defaultBlue-100'
                onClick={() => {
                  handleTaskUrl('https://instagram.com/cristiano');
                  setTaskUrlError(false);
                }}
              >
                https://instagram.com/cristiano
              </div>
              <div className='mr-1'> или</div>
              <div
                className='cursor-pointer text-defaultBlue-100'
                onClick={() => {
                  handleTaskUrl('https://vk.com/durov');
                  setTaskUrlError(false);
                }}
              >
                https://vk.com/durov
              </div>
            </div>
          ) : null}
        </div>
        <Platforms
          platformTranslation={platformTranslation}
          activePlatform={activePlatform}
          handlePlatform={handlePlatform}
          setTaskUrlError={setTaskUrlError}
          taskUrl={taskUrl}
          newTaskUrlError={newTaskUrlError}
        />
      </div>
    );
  };

  return (
    <>
      <nav
        className={
          'fixed z-20 flex items-center justify-center h-14 z-2 w-full bg-gray-700 text-gray-100'
        }
      >
        <div className='w-10/12 max-w-7xl flex items-center justify-between '>
          {/* <a href='#' className={'flex items-center justify-center'}>
            <picture className='w-auto h-10 mr-2'>
              <source type='image/webp' srcSet={globalData.global.logo_webp} />
              <source srcSet={globalData.global.logo} />
              <img
                className='w-auto h-10'
                src={globalData.global.logo}
                alt={globalData.global.site_name + ' logo'}
              />
            </picture>
            <span className='hidden text-3xl sm:text-2xl xl:block lg:block md:block sm:block font-extrabold '>
              {globalData.global.site_name}
            </span>
          </a> */}
          <Link className='text-xl' to='/'>
            LOGO
          </Link>

          <div className='relative flex items-center justify-between h-16 '>
            <Dropdown
              activeRole={activeRole}
              handleActiveRole={handleActiveRole}
              handleActivePage={handleActivePage}
              handleActiveUrl={handleActiveUrl}
            />

            <button
              className='font-bold text-sm xl:text-lg lg:text-lg md:text-md flex items-center ml-3 justify-center py-1 px-1 xl:px-4 lg:px-4 md:px-2  border border-transparent rounded-full mt-1 text-defaultGray-50 bg-indigo-400 hover:bg-indigo-500'
              onClick={() => {
                setOpenCreateTask(true);
              }}
            >
              <PlusIcon className={'w-7 xl:w-6 lg:w-6 h-6 xl:h-6 lg:h-6'} />
              <div className='hidden xl:block lg:block md:block sm:block ml-1'>
                Добавить задание
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* <div
        className={
          'absolute top-14 z-10 text-center w-full p-3 bg-indigo-400 text-sm text-defaultGray-100 animate__animated '
          //+ (errorLogin ? 'animate__slideInDown' : 'animate__slideOutUp')
        }
      >
        Пожалуйта, проверьте корректность введенных данных и повторите попытку
      </div> */}

      <Transition.Root show={createTaskOpened} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed z-30 inset-0 overflow-y-auto dialog'
          open={createTaskOpened}
          onClose={() => {
            setOpenCreateTask(false);
            setTaskUrlError(false);
          }}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              {renderNewTask()}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default PanelNav;
