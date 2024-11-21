import "./Footer.css";
import instalogo from "../../assets/instalogo.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="phone-number">Phone: +46372377878</div>
                <div className="location">City: Helsingborg</div>
                <img className="instagram-icon" src={instalogo} alt="insta-logo" />
                <div className="copyright-text">©Copyright 2024</div>
            </div>  
        </div>   
    )
}

export default Footer;