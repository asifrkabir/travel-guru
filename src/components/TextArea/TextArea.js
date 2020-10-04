import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DestinationContext } from '../../App';
import './TextArea.css';

const TextArea = (textType) => {

    const [currentDestination, setCurrentDestination] = useContext(DestinationContext);
    console.log(textType.textType);

    return (
        <div style={{ marginTop: "200px" }}>

            {
                textType.textType === "description"
                    ? <div>
                        <h1>{currentDestination.name}</h1>
                        <p>{currentDestination.description}</p>
                        <Link to="/booking"><button type="button" class="btn btn-warning">Booking</button></Link>
                    </div>
                    : <div>
                        <h1>{currentDestination.name}</h1>
                        <p>{currentDestination.touristSpots}</p>
                    </div>
            }
        </div >
    );
};

export default TextArea;