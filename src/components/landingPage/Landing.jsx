import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Landing.css";
import slides from "../../constants/landingImages";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Landing = () => {
    const navigate = useNavigate();

    const [idx, setIdx] = useState(0);
    const sliderRef = useRef(null); // Reference to the slider container

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateHeight = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const handleNext = () => {
        if (idx < slides.length - 1) {
            setIdx(idx + 1);
            scrollToSlide(idx + 1);
        }
    };

    const handlePrev = () => {
        if (idx > 0) {
            setIdx(idx - 1);
            scrollToSlide(idx - 1);
        }
    };

    const scrollToSlide = (index) => {
        const slider = sliderRef.current;
        const slideWidth = slider.offsetWidth; // Get the width of a single slide
        slider.scrollTo({
            left: slideWidth * index, // Scroll to the appropriate position
            behavior: "smooth", // Smooth scrolling
        });

        console.log(slider);
    };

    const handleClick = () => {
        navigate("/cakes");
    };

    return (
            <div className="landing-container">
            <div className="slideshow-slider" ref={sliderRef}>
            <div className="slide-arrows">
                            <div className='prev-slide' onClick={handlePrev}>
                                <BsChevronLeft />
                            </div>
                            <div className='next-slide' onClick={handleNext}>
                                <BsChevronRight />
                            </div>
                        </div>
                    {slides.map((slide, index) => (
                        <div className="slide-content" key={index} style={{ height: `${windowHeight}px`}}>
                            <img className="slide-image" src={slide.backgroundImage} alt="image" />
                                {slide.splash ?
                                
                                    (<div className="slide-info">
                                        <img className="slide-splash" src={slide.splash} alt="splash" />
                                        <div className="slide-text" style={{ marginTop: '-4rem'}}>{slide.text}</div>
                                        {/* <button className="slide-button" onClick={() => handleClick()}>Check out cakes</button> */}
                                        </div>
                                    ) : (
                                        <div className="slide-info">
                                            <div className="slide-header">{slide.header}</div>
                                            <div className="slide-text">{slide.text}</div>
                                            <button className="slide-button" onClick={() => handleClick()}>Check out cakes</button>
                                        </div>
                                      
                                    )
                                }
                        </div>
                        ))}
                </div>
            </div>
    );
};

export default Landing;