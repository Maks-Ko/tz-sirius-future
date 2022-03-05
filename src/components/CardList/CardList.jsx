import React from "react";
import Card from "../Card/Cars";
import './CardList.css';

function CardList(props) {
    return (
        <main className="main">
            <ul className="card-list">
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
                <Card
                    isFavorite={props.isFavorite} />
            </ul>
        </main>
    );
}

export default CardList;