import { Routes as Switch, Route } from 'react-router-dom';

import { Login } from 'pages/Login/login';
import { DailyTasks } from 'pages/DailyTasks/dailyTasks';

// import Route from './routes';

const Routes = () => (
  <Switch>
    <Route path='/' element={Login} />
    <Route path='/home' element={DailyTasks} />
  </Switch>
);

export default Routes;
