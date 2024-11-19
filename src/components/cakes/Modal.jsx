import { useState, useRef } from "react";
import { BsXLg } from "react-icons/bs";
import "./Modal.css";

const Modal = ({ showModal, setShowModal, cake }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const modalRef = useRef();

    // if we are at the end, go to the first image
    const next = () => {
        setCurrentIndex((currentIndex + 1) % cake.modal_images.length);
    };

    // if we are at the beginning, go to the last image
    const prev = () => {
        setCurrentIndex((currentIndex - 1 + cake.modal_images.length) % cake.modal_images.length);
    };    

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
            setCurrentIndex(0);
        }
    }

    return (
        <>
            {
                showModal ?
                    <div className="modal-container" ref={modalRef} onClick={closeModal}>
                        <div className="modal-wrapper">
                            <div className="modal-carousel">
                        
                                {cake.modal_images.map((image, index) => (
                                    
                                    <div key={index} className={currentIndex === index ? "fade" : "slide fade"}>
                                        <img src={image} className="carousel-image" />
                                    </div>
                                ))}
                                {/* Previous button */}
                                <button onClick={prev} className='prev'>
                                &lt;
                                </button>

                                {/* Next button */}
                                <button onClick={next} className='next'>
                                &gt;
                                </button>
                            </div>
                            <div className="modal-text-container">
                                <div className="modal-title">{cake.title}</div>
                                <div className="modal-price">{cake.price} SEK</div>
                                <div className="modal-description">{cake.description}</div>                                    
                            </div>
                            <BsXLg className="close-button" onClick={() => {
                                setShowModal(false);
                                setCurrentIndex(0);
                            }
                            } />
                        </div>
                    </div>
                    : null}
        </>
    )
}

export default Modal;