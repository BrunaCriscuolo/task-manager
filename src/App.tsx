import { Routes, Route } from 'react-router-dom';

import { Login } from 'pages/Login/login';
import { DailyTasks } from 'pages/DailyTasks/dailyTasks';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/teste' element={<DailyTasks />} />
      </Routes>
    </div>
  );
}

export default App;
