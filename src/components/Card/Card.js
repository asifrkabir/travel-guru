import React, { useContext } from 'react';
import { DestinationContext } from '../../App';
import './Card.css';

const Card = (props) => {

    const [currentDestination, setCurrentDestination] = useContext(DestinationContext);

    const handleCardClick = () => {
        setCurrentDestination(props.destination);
    }

    const { name, description, img } = props.destination;

    return (
        <>
            <div className="card" onClick={handleCardClick}>
                <div className="card-container">
                    <img className="card-img-top" src={img} alt="Card image cap" />
                    <p className="card-text">{name.toUpperCase()}</p>
                </div>

            </div>
        </>
    );
};

export default Card;