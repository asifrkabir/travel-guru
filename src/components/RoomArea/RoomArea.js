import React, { useState } from 'react';
import room from '../../fakeData/room';
import RoomCard from '../RoomCard/RoomCard';

const RoomArea = () => {

    const [rooms, setRooms] = useState(room);

    return (

        <div style={{ marginTop: "50px" }}>
            {
                rooms.map(room => <RoomCard room={room}></RoomCard>)
            }
        </div>
    );
};

export default RoomArea;