import React, { useContext } from 'react';
import { DestinationContext } from '../../App';
import MapArea from '../MapArea/MapArea';
import NavigationBar from '../NavigationBar/NavigationBar';
import RoomArea from '../RoomArea/RoomArea';
import './SearchPage.css';

const SearchPage = () => {

    const [currentDestination] = useContext(DestinationContext);

    return (
        <div>
            <NavigationBar invert={false}></NavigationBar>
            <div className="container">
                <hr />
                <p style={{ color: 'black', marginBottom: '1px' }}>252 stays Apr 13-17 3 guests</p>
                <h4 style={{ color: 'black' }}>Stay in {currentDestination.name}</h4>
                <div className="row">
                    <div className="col-6">
                        <RoomArea></RoomArea>
                    </div>

                    <div className="col-6">
                        <MapArea></MapArea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;