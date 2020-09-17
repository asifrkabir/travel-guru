import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import CardArea from '../CardArea/CardArea';
import NavigationBar from '../NavigationBar/NavigationBar';
import TextArea from '../TextArea/TextArea';
import './BookingPage.css';

const BookingPage = () => {
    return (
        <div className="bg">
            <NavigationBar></NavigationBar>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <TextArea textType="booking"></TextArea>
                    </div>
                    <div className="col-6">
                        <BookingForm></BookingForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;