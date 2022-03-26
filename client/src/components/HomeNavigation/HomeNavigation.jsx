import React from 'react';
import { MdMovie } from "react-icons/md";
import './HomeNavigation.css';

const HomeNavigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className='navbar-title'>
                    <MdMovie size='1.8em' className='movie-icon'/>
                    <a class="navbar-brand navbar-title-name" href="#">Streamzer</a>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
                <button class="btn btn-outline-secondary login-button my-2 my-sm-0" type="submit">Sign in</button>
            </nav>
        </div>
    )
}

export default HomeNavigation;