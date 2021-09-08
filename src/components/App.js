import React, { useEffect } from 'react';
import Login from './Panel/Login';
import Panel from './Panel/Panel';
import Loading from './partials/Loading';
import { Switch, Route } from 'react-router-dom';
import Home from './LandingPage/Home';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart } from './../redux/actions/app';
import SocMediaList from './LandingPage/SocMediaList';

const App = () => {
  const dispatch = useDispatch();
  // const { loaded, user } = useSelector((state) => state.app);
  let loaded = true;
  let user = true;
  useEffect(() => {
    //dispatch(fetchStart());
  }, []);

  return (
    <div className={'h-screen'}>
      {loaded ? (
        <>
          {user ? (
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/socmedia-list' component={SocMediaList} />
              <Route exact path='/panel' component={Panel} />
              <Route exact path='/login' component={Login} />

              {/* <Route exact path='/tasks' component={Tasks} />
              <Route exact path='/settings' component={Settings} />
              <Route exact path='/referrals' component={Referrals} />
              <Route exact path='/bots' component={Bots} />
              <Route exact path='/balance_buyer' component={BalanceBuyer} />
              <Route exact path='/balance_seller' component={BalanceSeller} />
              <Route exact path='/statistics' component={Statistics} /> */}
            </Switch>
          ) : (
            <Switch>
              <Route exact path='/' component={Home} />{' '}
              <Route exact path='/socmedia-list' component={SocMediaList} />
              <Route exact path='/login' component={Login} />
            </Switch>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
