import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main
            title='Все изображения'
            isFavorite={false} />
        </Route>
        <Route path='/favorite'>
          <Main
            title='Избранное'
            isFavorite={true} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
