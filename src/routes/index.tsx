import { BrowserRouter, Routes as RoutesRouter, Route } from 'react-router-dom';

import { Login } from 'pages/Login/login';
import { DailyTasks } from 'pages/DailyTasks/dailyTasks';

import { Layout } from './routes';

export const Routes = () => (
  <BrowserRouter>
    <RoutesRouter>
      <Route path='/' element={<Layout component={<Login />} />} />
      <Route path='/home' element={<DailyTasks />} />
      <Route path='*' element={<p>ok</p>} />
    </RoutesRouter>
  </BrowserRouter>
);
