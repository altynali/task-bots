import React, { useEffect, useRef } from 'react';
import { createPopper } from '@popperjs/core';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { pagesBuyer, pagesSeller } from './mocks';

const Dropdown = ({
  activeRole,
  handleActiveRole,
  handleActivePage,
  handleActiveUrl,
}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeDropdownPopover();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className='flex flex-wrap ' ref={wrapperRef}>
        <div className='w-full sm:w-4/12 md:w-3/4 px-1'>
          <div className='relative inline-flex align-middle w-full'>
            <button
              className='text-white font-bold px-4 py-2 mt-2 rounded-full bg-indigo-400 shadow hover:bg-indigo-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 '
              type='button'
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <MenuIcon className='block w-6 xl:w-6 lg:w-6 h-5 xl:h-6 lg:h-6' />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'text-base z-50 float-center py-2 list-none text-left rounded shadow-lg mt-1 bg-white'
              }
              style={{
                minWidth: '12rem',
              }}
            >
              <a
                className='text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent flex justify-around'
                onClick={(e) => e.preventDefault()}
              >
                <button
                  className={
                    'text-sm py-2 pr-1 font-normal outline-none w-full whitespace-nowrap bg-transparent ' +
                    (activeRole === 'seller'
                      ? 'text-indigo-400'
                      : ' text-gray-700')
                  }
                  onClick={() => {
                    handleActiveRole('seller');
                    handleActivePage(pagesSeller[0]);
                    handleActiveUrl(pagesSeller[0].url);
                  }}
                >
                  Я исполнитель
                </button>
                <span className='py-2 text-gray-700'>|</span>
                <button
                  className={
                    'text-sm py-2 pl-1 font-normal outline-none w-full whitespace-nowrap bg-transparent ' +
                    (activeRole === 'buyer'
                      ? 'text-indigo-400'
                      : ' text-gray-700')
                  }
                  onClick={() => {
                    handleActiveRole('buyer');
                    handleActivePage(pagesBuyer[0]);
                    handleActiveUrl(pagesBuyer[0].url);
                  }}
                >
                  Я заказчик
                </button>
              </a>
              <a
                className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700'
                onClick={(e) => e.preventDefault()}
              >
                <button>Выйти</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
