import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Planets from './components/planets'

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default App;
