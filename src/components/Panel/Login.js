import React, { useState } from 'react';
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../../redux/actions/login';
import { fetchUserAndServices } from '../../redux/actions/app';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // const { globalData } = useSelector((state) => state.app);
  // const { errorLogin } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    dispatch(fetchUserAndServices());
    // if (!errorLogin) window.location.replace('/panel');
  };

  return (
    <div className={'w-full h-screen'}>
      <div
        className={
          'fixed z-20 flex items-center justify-center h-14 z-2 w-full bg-gray-700'
        }
      >
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
          <span className='text-3xl font-extrabold text-defaultGray-300'>
            {globalData.global.site_name}
          </span>
        </a> */}
        <Link className='text-xl' to='/'>
          LOGO
        </Link>
      </div>
      {/* <div
        className={
          'absolute top-14 z-10 text-center w-full p-3 bg-indigo-400 text-sm text-defaultGray-50 animate__animated ' +
          (errorLogin ? 'animate__slideInDown' : 'animate__slideOutUp')
        }
      >
        Пожалуйта, проверьте корректность введенных данных и повторите попытку
      </div> */}
      <div
        className={
          'flex align-center justify-center w-full h-screen bg-defaultGray-100'
        }
      >
        <div className='block my-auto text-defaultGray-300 rounded-xl overflow-hidden bg-defaultGray-50 p-6 text-lg font-semibold w-60'>
          <div className='block text-center text-2xl font-bold mb-6'>Вход</div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='mb-4'>
              <label htmlFor='username' className='block mb-2'>
                Имя пользователя
              </label>
              <div className='mt-1 relative rounded-md w-48'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  className='focus:border-indigo-100 block w-full sm:text-sm bg-defaultBlack-50 border-defaultGray-200 rounded-md'
                  placeholder='Ваше имя пользователя'
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block mb-2'>
                Пароль
              </label>
              <div className='mt-1 relative rounded-md w-48'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='focus:border-indigo-100 block w-full sm:text-sm bg-defaultBlack-50 border-defaultGray-200 rounded-md'
                  placeholder='********'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type='submit'
              className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-defaultGray-50 bg-indigo-400 hover:bg-indigo-400 w-48'
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
