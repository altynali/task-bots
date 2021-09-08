import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

export default function Index() {
  const { user } = useSelector((state) => state.app);

  console.log(user);

  return (
    <div>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderColor: 'rgba(129, 140, 248)',
              pointBackgroundColor: 'rgba(129, 140, 248)',
              pointBorderColor: 'rgba(129, 140, 248)',
              backgroundColor: 'gray',
              borderWidth: 2,
              fill: true,
            },
          ],
        }}
        height={30}
        width={'100%'}
      />
    </div>
  );
}
