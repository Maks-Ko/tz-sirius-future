import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Image from '../Image/Image';
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
        <Route path='/:id'>
          <Image
            title='Назвние фото'
            isFavoriteButton={false}
            navigation='header__image_show'
            imageSize='card_size' />
        </Route>
        <Route path='/favorite/img'>
          <Image
            title='Назвние фото'
            isFavoriteButton={true}
            navigation='header__image_show'
            imageSize='card_size' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
