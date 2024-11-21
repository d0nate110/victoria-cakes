import landing_cake1 from "../assets/landingPagePics/landing_cake1.jpg";
import landing_cake2 from "../assets/landingPagePics/landing_cake2.jpg";
import landing_splash from "../assets/landing-splash.png";
import { landingPageHeader, landingPageText } from "./text";

const slides = [
    {
        splash: landing_splash,
        backgroundImage: landing_cake1,
        header: landingPageHeader[0],
        text: landingPageText[0],
    },
    {
        backgroundImage: landing_cake2,
        header: landingPageHeader[1],
        text: landingPageText[1],
    },
];


export default slides;