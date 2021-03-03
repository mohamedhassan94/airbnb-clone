import React from 'react';
import "./card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} />
            <div className="card__info">
                <h2>{ props.title }</h2>
                <h4>{ props.description }</h4>
                <h3>{ props.price }</h3>
            </div>
        </div>
    );
};

export default Card;