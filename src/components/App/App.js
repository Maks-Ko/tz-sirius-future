import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Route path='/'>
        <Main
          title='Все изображения' />
      </Route>
    </div>
  );
}

export default App;
