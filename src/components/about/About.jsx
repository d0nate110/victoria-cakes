import "./About.css";
import takblet from "../../assets/takblet.jpg";
import { aboutHeader, aboutText } from "../../constants/text";
const About = () => {

    return (
        <div className="section-container">
            <div className="about-text">
                <div className="header-text">{aboutHeader}</div>
                <div>{aboutText}</div>
            </div>
            <img className="about-pic" src={takblet} />
        </div>
    )
}

export default About;