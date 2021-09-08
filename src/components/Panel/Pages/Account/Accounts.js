import React, { useEffect } from 'react';
import Card from './AccountCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAccs } from './../../../../redux/actions/acc';

const Accounts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getAccs()); //into Login
  }, []);

  // const { accs } = useSelector((state) => state.acc);

  return (
    <>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 text-gray-100'>
        <div className='font-medium text-2xl '>Ваши аккаунты</div>
        <div className='font-medium text-2xl '>
          Аккаунтов : 1{/* {accs.accounts?.length} */}
        </div>
      </div>
      {/* {accs.accounts?.map((acc) => (
        <Card acc={acc} />
      ))} */}
      <Card />
    </>
  );
};

export default Accounts;
