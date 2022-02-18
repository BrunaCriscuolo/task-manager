import { Routes, Route } from 'react-router-dom';
import { Login } from 'pages/Login/login';
import { DailyTasks } from 'pages/DailyTasks/dailyTasks';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<DailyTasks />} />
      <Route path='*' element={<p>ok</p>} />
    </Routes>
  );
}

export default App;
