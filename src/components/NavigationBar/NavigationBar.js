import React from 'react';
import logo from '../../Logo.png';
import './NavigationBar.css';

const NavigationBar = (props) => {

    return (
        <div className="container text-center">
            
            {
                props.invert
                    ? <div>
                        <nav className="navbar navbar-expand-lg text-center inverted">
                            <a className="navbar-brand" href="#"><img src={logo} alt="" style={{ width: '4em', height: 'auto' }} /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <input className="form-control mr-sm-2 search-bar" type="search" placeholder="Search your Destination..." aria-label="Search" />
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Destination</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" class="btn btn-warning">Login</button>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                    
                    : <div>
                        <nav className="navbar navbar-expand-lg text-center">
                            <a className="navbar-brand" href="#"><img src={logo} alt="" style={{ width: '4em', height: 'auto' }} /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <input className="form-control mr-sm-2 search-bar" type="search" placeholder="Search your Destination..." aria-label="Search" />
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Destination</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" class="btn btn-warning">Login</button>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
            }

        </div>
    );
};

export default NavigationBar;