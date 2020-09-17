import React from 'react';
import CardArea from '../CardArea/CardArea';
import NavigationBar from '../NavigationBar/NavigationBar';
import TextArea from '../TextArea/TextArea';
import './Home.css';

const Home = () => {
    return (
        <div className="bg">
            <NavigationBar></NavigationBar>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <TextArea textType="description"></TextArea>
                    </div>
                    <div className="col-6">
                        <CardArea></CardArea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;