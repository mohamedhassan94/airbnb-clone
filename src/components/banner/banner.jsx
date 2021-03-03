import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './banner.css'
import DatePicker from '../datePicker/datePicker';
import { useHistory } from 'react-router-dom';

const Banner = () => {

    const [ showSearch, setShowSearch ] = useState(false);
    const history = useHistory();

    return (
        <div className="banner">
            <div className="banner__search">


                <Button 
                variant="outlined" 
                className="banner__searchButton"
                onClick={ () => setShowSearch(!showSearch) }
                >{ showSearch ? 'Hide' : 'Search Dates' }</Button>

                { showSearch && <DatePicker /> }


            </div>

            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant="outlined" className="banner__button" onClick={ () => history.push('/search') }>
                    Explore Nearby
                </Button>
            </div>
        </div>
    );
};

export default Banner;