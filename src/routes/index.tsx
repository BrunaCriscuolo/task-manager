import { Routes as RoutesRouter } from 'react-router-dom';

import { Login } from 'pages/Login/login';
import { DailyTasks } from 'pages/DailyTasks/dailyTasks';

import { Route } from './routes';

export const Routes = () => (
  <RoutesRouter>
    <Route path='/' element={<Login />} />
    <Route path='/home' element={<DailyTasks />} />
    <Route path='*' element={<p>ok</p>} />
  </RoutesRouter>
);
