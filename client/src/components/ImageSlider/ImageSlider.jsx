import React from 'react';
import { MdSearch, MdMovie, MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './ImageSlider.css';

import DashboardNavigation from '../DashboardNavigation/DashboardNavigation';

import babydriver from '../../img/BabyDriver-Image.jpg';
import godfather from '../../img/The-Godfather-image2.jpg';
import wardogs from '../../img/WarDogs-Image.jpg';


const ImageSlider = (props) => {
    let navigate = useNavigate();

    return (
        <div>
            <DashboardNavigation props={props}/>
            <Carousel className='slider' controls={false} indicators={false}>
                    <Carousel.Item>
                        <img src={babydriver} height="600px" object-fit="cover" width="100%" alt="" />
                        <Carousel.Caption>
                            <h1>Baby driver</h1>
                            <button className="btn btn-outline-secondary my-2 my-sm-0"></button>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider;

/*
            <Carousel>
                <Carousel.Item>
                    <img src={babydriver} height="600px" object-fit="cover" width="100%" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={godfather} height="600px" object-fit="cover" width="100%" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={wardogs} height="600px" object-fit="cover" width="100%" alt="" />
                </Carousel.Item>
            </Carousel>
*/