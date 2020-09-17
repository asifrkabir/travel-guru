import React, { useState } from 'react';
import Card from '../Card/Card';
import destination from '../../fakeData/destination';

const CardArea = () => {

    const [destinations, setDestinations] = useState(destination);
    return (



        <div className="row card-deck" style={{marginTop: "200px"}}>
            {
                destinations.map(destination => <Card destination={destination}></Card>)
            }
        </div>
    );
};

export default CardArea;