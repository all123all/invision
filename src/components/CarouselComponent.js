import React from "react";
import {Carousel} from 'react-bootstrap';

import pic1 from '../img/slide1.png';
import pic2 from '../img/slide2.png';

const CarouselComponent = () => {
    return(
        <Carousel className="carousel-main-container">
            <Carousel.Item interval={2500} className="carousel-item">
                <img
                className="d-flex carousel-img"
                src={pic1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h1>First slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                className="d-flex carousel-img"
                src={pic2}
                alt="Second slide"
                />
                <div className="carousel-caption">
                    <h1>Second slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                className="d-flex carousel-img"
                src={pic1}
                alt="Third slide"
                />
                <div className="carousel-caption">
                    <h1>Third slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;