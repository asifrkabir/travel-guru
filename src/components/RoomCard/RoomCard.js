import React from 'react';
import './RoomCard.css';

const RoomCard = (props) => {

    const { name, rating, rater, rate, img } = props.room;

    return (
        <>
            <div className="card row" style={{ color: 'black', marginBottom: '20vh', fontSize: '1em'}}>
                <div className="card-container col-6">
                    <img className="card-img-top" src={img} alt="Card image cap" />
                </div>
                <div className="card-container col-6">
                    <p>{name}</p>
                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                    <p>Wifi Air-conditioning Kitchen</p>
                    <p>Cancellation fexibility availiable</p>
                </div>

            </div>
        </>
    );
};

export default RoomCard;