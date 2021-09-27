import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImageSlider() {
    let settings= {
        dots: true,
        infinite: true,
        speed: 500, //500ms 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/assets/images/slider-badging.jpg" alt="slider"/>
            </Wrap>
            <Wrap>
                <img src="/assets/images/slider-badag.jpg" alt="slider"/>
            </Wrap>
            <Wrap>
                <img src="/assets/images/slider-scale.jpg" alt="slider"/>
            </Wrap>
            <Wrap>
                <img src="/assets/images/slider-scales.jpg" alt="slider"/>
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    padding-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    /* to see the next img in slider */
    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

`
const Wrap = styled.div`
    cursor: pointer;
    img {
        /* to seperate the images we use border box sizing ( app.css) */
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`
