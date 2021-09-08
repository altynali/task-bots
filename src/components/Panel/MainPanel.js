import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import SidebarPages from './SidebarPages';
import Pages from './Pages/Pages';

const Sidebar = ({
  handleActiveUrl,
  url,
  handleActivePage,
  activePage,
  activeRole,
  setOpenCreateTask,
}) => {
  const [confirmEmail, setConfirmEmail] = useState(false);
  return (
    <>
      <div className={'max-w-8xl w-10/12 pt-20 pb-6 mx-auto'}>
        <div className='flex flex-col lg:flex-row items-start justify-center space-y-6 lg:space-y-0 lg:space-x-6'>
          <div className='w-full lg:w-96'>
            <SidebarPages
              handleActiveUrl={handleActiveUrl}
              setActivePage={handleActivePage}
              activePage={activePage}
              activeRole={activeRole}
            />
            <div
              className={
                'bg-gray-700 p-6 rounded-xl mb-6 flex flex-col items-center content-center text-center'
              }
            >
              <div className={'text-sm text-defaultGray-100 mb-4'}>
                Подтвердите email и получите +100 поинтов в подарок.
              </div>
              <button
                className='font-bold text-lg flex items-center justify-center py-1 px-4 border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-400 w-full'
                onClick={() => {
                  setConfirmEmail(true);
                }}
              >
                <div>Подтвердить email</div>
              </button>
            </div>
          </div>
          <div className='w-full'>
            <Pages url={url} setOpenCreateTask={setOpenCreateTask} />
          </div>
        </div>
      </div>

      <Transition.Root show={confirmEmail} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed z-30 inset-0 overflow-y-auto dialog'
          open={confirmEmail}
          onClose={() => {
            setConfirmEmail(false);
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
              <div className='inline-block align-bottom bg-white text-defaultGray-300 p-4 rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle w-11/12 max-w-xl'>
                <div
                  className={
                    'mt-2 mb-6 text-2xl font-medium  items-center justify-center '
                  }
                >
                  <div className='ml-4'>Ваш email:</div>
                  <div className='bg-defaultGray-50 rounded-lg p-4 mb-4'>
                    <input className='font-medium text-defaultGray-300 placeholder-defaultGray-200 border-2 px-6 py-3 h-12 block w-full sm:text-sm bg-defaultGray-50 rounded-md ' />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Sidebar;
