import React from 'react';
import { MdSearch, MdMovie, MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './DashboardNavigation.css';

const HomeNavigation = () => {
    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-default">

            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className='navbar-title'>
                        <MdMovie size='1.8em' className='movie-icon text-light'/>
                        <a className="navbar-brand navbar-title-name" href="#">Streamzer</a>
                    </div> 

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV shows</a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">

                    <a className="text-reset me-3" href="#">
                        <MdSearch size='1.8em' className='movie-icon text-light'/>
                    </a>

                    <a className="text-reset me-3 " href="#">
                        <MdPerson size='1.8em' className='movie-icon text-light'/>
                    </a>       
                </div>
            </div>
        </nav>


    )
}

export default HomeNavigation;