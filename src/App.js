import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import HomeModal from './components/toHome'
import Planets from './components/planets'

function App() {
  return (
    <div>
      <Outlet/>
      <HomeModal/>
    </div>
  );
}

export default App;
