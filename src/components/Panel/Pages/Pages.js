import React, { useEffect } from 'react';
import Tasks from './Task/Tasks';
import Settings from './Setting/Settings';
import Referrals from './Referral/Referrals';
import Contests from './Contest/Contests';
import Bots from './Bots/Bots';
import BalanceSeller from './Balance/BalanceSeller';
import Statistics from './Statistic/Statistics';
import Accounts from './Account/Accounts';
import CustomServices from './Custom/CustomServices';

const Pages = ({ url, setOpenCreateTask }) => {
  if (url === 'tasks') {
    return <Tasks setOpenCreateTask={setOpenCreateTask} />;
  } else if (url === 'settings') {
    return <Settings />;
  } else if (url === 'referrals') {
    return <Referrals />;
  } else if (url === 'contests') {
    return <Contests />;
  } else if (url === 'bots') {
    return <Bots />;
  } else if (url === 'accounts') {
    return <Accounts />;
  } else if (url === 'balance_seller') {
    return <BalanceSeller />;
  } else if (url === 'statistics') {
    return <Statistics />;
  } else if (url === 'custom_services') {
    return <CustomServices />;
  } else return <></>;
};

// <Switch>
//   <Route exact path='/panel/tasks' component={Tasks} />
//   <Route exact path='/panel/settings' component={Settings} />
//   <Route exact path='/panel/referrals' component={Referrals} />
//   <Route exact path='/panel/bots' component={Bots} />
//   <Route exact path='/panel/balance_buyer' component={BalanceBuyer} />
//   <Route exact path='/panel/balance_seller' component={BalanceSeller} />
//   <Route exact path='/panel/statistics' component={Statistics} />
//   <Route exact path='/panel/statistics' component={Statistics} />
// </Switch>;

export default Pages;
