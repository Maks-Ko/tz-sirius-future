import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Image from '../Image/Image';
import api from '../utils/ApiPexels/ApiPexels';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [cardsFavorite, setCardsFavorite] = useState([]);
  const [card, setCard] = useState('');
  const [isPreloader, setIsPreloader] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsPreloader(true);
    api.getServerData()
      .then((data) => {
        console.log(data.photos);
        setCards(data.photos);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });

    history.push('/image');
  }, [history]);

  function handleCardShow(data) {
    setCard(data.card);
  }

  function handleCardFavorite(data) {
    const isCardFavorite = cardsFavorite.some((c) => c.id === data.id);
    if (!isCardFavorite) {
      setCardsFavorite([data, ...cardsFavorite]);
      history.push('/image');
    }
  }

  function handleCardDelete(data) {
    setCards((cards) => cards.filter((c) => c.id !== data.id));
    history.push('/image');
  }

  function handleCardFavoriteDelete(data) {
    setCardsFavorite((cardsFavorite) => cardsFavorite.filter((c) => c.id !== data.id));
    history.push('/favorite');
  }

  function handleCardAllDelete(data) {
    setCardsFavorite((cardsFavorite) => cardsFavorite.filter((c) => c.id !== data.id));
    setCards((cards) => cards.filter((c) => c.id !== data.id));
    history.push('/favorite');
  }

  return (
    <div className='app'>
      <Switch>

        <Route exact path='/image'>
          <Main
            title='Все изображения'
            isFavorite={false}
            isPreloader={isPreloader ? "preloader_active" : ""}
            cards={cards}
            cardsFavorite={cardsFavorite}
            onCardShow={handleCardShow} />
        </Route>

        <Route path='/image/:id'>
          <Image
            card={card}
            title={card.alt}
            isFavoriteButton={false}
            onCardFavorite={handleCardFavorite}
            onCardDelete={handleCardDelete}
            navigation='header__image_show'
            imageSize='card_size' />
        </Route>

        <Route exact path='/favorite'>
          <Main
            title='Избранное'
            isFavorite={true}
            cards={cardsFavorite}
            onCardShow={handleCardShow} />
        </Route>

        <Route path='/favorite/:id'>
          <Image
            card={card}
            title={card.alt}
            isFavoriteButton={true}
            onCardFavorite={handleCardFavoriteDelete}
            onCardDelete={handleCardAllDelete}
            navigation='header__image_show'
            imageSize='card_size' />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
