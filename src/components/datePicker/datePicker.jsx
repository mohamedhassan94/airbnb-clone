import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';


import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './datePicker.css'

const DatePicker = () => {

    const [ startDate, setStartDate ] = useState( new Date() );
    const [ endDate, setEndDate ] = useState( new Date() );
    const history = useHistory();


    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    };

    const handleSelect = (ranges) => {
        setStartDate( ranges.selection.startDate );
        setEndDate( ranges.selection.endDate );
    };

    return (
        <div className="datePicker">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>Number of guests <PeopleIcon /> </h2>
            <input type="number" defaultValue={2} min={0} />
            <Button onClick={ () => history.push('/search') }>Search Airbnb</Button>
        </div>
    );
};

export default DatePicker;