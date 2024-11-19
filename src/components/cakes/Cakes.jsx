import "./Cakes.css";
import CakeItems from "../../constants/cakesList";
import Modal from "./Modal";
import { useState } from "react";
import Card from "./Card";

const Cakes = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedCake, setSelectedCake] = useState(null);

    return (
        <div className="container">
        <div className="cakes-section-container">
            {CakeItems.map((cakeItem, index) => (
                <Card key={index} cake={cakeItem} setShowModal={setShowModal} setSelectedCake={setSelectedCake} />
            ))}
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} cake={selectedCake}  />
        </div>
    )
}

export default Cakes;