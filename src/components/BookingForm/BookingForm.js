import React, { useContext, useState } from 'react';
import { DestinationContext } from '../../App';
import './BookingForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {

    const formStyle = {
        backgroundColor: "#fff",
        padding: "20px"
    }

    const [selectedFromDate, setselectedFromDate] = useState(null);
    const [selectedToDate, setselectedToDate] = useState(null);

    const [currentDestination] = useContext(DestinationContext);

    return (
        <div style={{ marginTop: "200px" }}>
            <form style={formStyle}>
                <div class="form-group">
                    <label for="origin">Origin</label>
                    <input type="text" class="form-control" id="origin" placeholder="Enter Origin" />
                </div>
                <div class="form-group">
                    <label for="destination">Destination</label>
                    <input type="text" class="form-control" id="destination" placeholder="Enter Destination" />
                </div>
                <div className="row justify-content-between">
                    <div className="col-5">
                        <label for="from" style={{ display: "block" }}>From</label>
                        <DatePicker selected={selectedFromDate} onChange={date => setselectedFromDate(date)} dateFormat='dd/MM/yyyy'>
                        </DatePicker>
                    </div>
                    <div className="col-5">
                        <label for="to" style={{ display: "block" }}>To</label>
                        <DatePicker selected={selectedToDate} onChange={date => setselectedToDate(date)} dateFormat='dd/MM/yyyy'>
                        </DatePicker>
                    </div>
                </div>
                <button type="button" class="btn btn-warning" style={{width: "100%", marginTop: "1em"}}>Start Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;