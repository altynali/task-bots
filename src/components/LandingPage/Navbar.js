/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import SmoothScrolling from './smoothScrolling';
import { useSelector } from 'react-redux';
import { user } from './../mocks/mock';

const navigation = [
  { name: 'Преимущества', to: 'advantages' },
  { name: 'Тарифы', to: 'pricing' },
  // { name: 'Заработок на ботах', href: '/bots-landing' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const scrollTo = (to) => {
  SmoothScrolling.scrollTo(to);
};
export default function Example() {
  // const { user } = useSelector( ( state ) => state.app );

  return (
    <Disclosure as='nav' className='bg-indigo-600 h-20 mb-10 fixed z-50 w-full'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-2 h-full'>
            <div className='relative flex items-center justify-between h-full'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start smoothBlock'>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4 '>
                    {navigation.map((item, i) => {
                      if (i !== 2)
                        return (
                          <button
                            key={item.name}
                            onClick={() => {
                              scrollTo(item.to);
                            }}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300  hover:text-white',
                              'px-3 py-2 rounded-md font-medium text-lg'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </button>
                        );
                      else {
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300  hover:text-white',
                              'px-3 py-2 rounded-md font-medium text-lg'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu as='div' className='ml-3 relative'>
                          {user ? (
                            <Link
                              className=' py-2 px-4 border border-transparent text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-100 rounded'
                              to='/panel'
                            >
                              Личный кабинет
                            </Link>
                          ) : (
                            <Link
                              className=' py-2 px-4 border border-transparent text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-100 rounded'
                              to='/login'
                            >
                              Войти
                            </Link>
                          )}
                        </Menu>
                      </div>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          {/* NAV WHEN SCREEn IS SMALL */}
          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
