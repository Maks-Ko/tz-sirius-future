import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Image from '../Image/Image';
import api from '../utils/ApiPexels/ApiPexels';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [cardsFavorite, setCardsFavorite] = useState([]);
  const [card, setCard] = useState('');

  useEffect(() => {
    api.getServerData()
      .then((data) => {
        console.log(data.photos);
        setCards(data.photos);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleCardShow(data) {
    setCard(data.card);
  }

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main
            title='Все изображения'
            isFavorite={false}
            cards={cards}
            onCardShow={handleCardShow} />
        </Route>
        
        <Route path='/favorite'>
          <Main
            title='Избранное'
            isFavorite={true}
            cards={cardsFavorite} />
        </Route>

        <Route path='/:id'>
          <Image
            card={card}
            title={card.alt}
            isFavoriteButton={false}
            navigation='header__image_show'
            imageSize='card_size' />
        </Route>

        <Route path='/favorite/:id'>
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
