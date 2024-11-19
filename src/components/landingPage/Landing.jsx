import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Landing.css";
import slides from "../../constants/landingImages";

const Landing = () => {
    const delay = 2000; // Slide delay (2 seconds)
    const navigate = useNavigate();
    const [idx, setIdx] = useState(0);
    const timeoutRef = useRef(null);

    // const resetTimeout = () => {
    //     if (timeoutRef.current) {
    //         clearTimeout(timeoutRef.current);
    //     }
    // };

    // useEffect(() => {
    //     resetTimeout();
    //     timeoutRef.current = setTimeout(
    //         () => setIdx((prevIdx) => (prevIdx === slides.length - 1 ? 0 : prevIdx + 1)),
    //         delay
    //     );
    //     return () => resetTimeout();
    // }, [idx]);

    const handleClick = () => {
        navigate("/cakes");
    };

    return (
            <div className="landing-container">
            <div className="slideshow-slider">
                        {/* <div className="slide-arrows">
                            <div className='prev-slide'>
                                &lt;
                            </div>
                            <div className='next-slide'>
                                &gt;
                            </div>
                        </div> */}
                    {slides.map((slide, index) => (
                        <div className="slide-content" key={index}>
                            <img className="slide-image" src={slide.backgroundImage} alt="image" />
                            <div className="slide-info">
                                <div className="slide-header">{slide.header}</div>
                                <div className="slide-text">{slide.text}</div>
                                <button className="slide-button" onClick={() => handleClick()}>Check out cakes</button>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
    );
};

export default Landing;