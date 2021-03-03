import { FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import './searchResults.css';

const SearchResults = (props) => {
    return (
        <div className="searchResults">
            <img src={props.img} />
            <FavoriteBorderIcon className="searchResults__heart" />

            <div className="searchResults__info">

                <div className="searchResults__infoTop">
                    <p>{props.location}</p>
                    <h3>{props.title}</h3>
                    <p>_____</p>
                    <p>{props.description}</p>
                </div>

                <div className="searchResults__infoBottom">
                    <div className="searchResults__stars">
                        <StarIcon className="searchResults__star"/>
                        <p><strong>{props.star}</strong></p>
                    </div>
                    <div className="searchResults__price">
                        <p>{props.price}</p>
                        <h3>{props.total}</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchResults;