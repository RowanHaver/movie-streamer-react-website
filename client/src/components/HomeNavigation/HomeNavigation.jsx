import React from 'react';
import { MdMovie } from "react-icons/md";
import './HomeNavigation.css';

const HomeNavigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='navbar-title'>
                    <MdMovie size='1.8em' className='movie-icon'/>
                    <a className="navbar-brand navbar-title-name" href="#">Streamzer</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-outline-secondary login-button my-2 my-sm-0" type="submit">Sign in</button>
            </nav>
        </div>
    )
}

export default HomeNavigation;