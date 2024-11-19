import { BsArrowRightCircle } from "react-icons/bs";
import "./Card.css"

const Card = ({ cake, setShowModal, setSelectedCake }) => {

    const expandModal = (cakeItem, setShowModal, setSelectedCake) => {
        setShowModal(true);
        setSelectedCake(cakeItem);
    }
    return (
        <div className="card-container">
            <img className="cakes-image" src={cake.image} alt={cake.title} />
            <div className="subcard-container">
                <div className="card-title-arrow">
                    <div className="card-title">{cake.title}</div>
                    <BsArrowRightCircle className="card-arrow" onClick={() => expandModal(cake, setShowModal, setSelectedCake)} />
                </div>
                <div className="card-price">{cake.price} SEK</div>
                <div className="card-description">{cake.description}</div>
            </div>
        </div>
    )
}

export default Card;