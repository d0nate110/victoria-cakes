import cake1 from "../assets/landingPagePics/landing_cake2.jpg";
import halloween_s1 from "../assets/halloween_sillicon/halloween_s1.jpg";
import halloween_s2 from "../assets/halloween_sillicon/halloween_s2.jpg";
import halloween_f1 from "../assets/halloween_flat/halloween_f1.jpg";
import halloween_f2 from "../assets/halloween_flat/halloween_f2.jpg";


const CakeItems = [
    {
        title: "Easter",
        image: cake1,
        modal_images: [cake1],
        price: 200,
        description: "It is an Easter cake, very tasty"
    },
    {
        title: "Halloween Sillicon",
        image: halloween_s1,
        modal_images: [halloween_s1, halloween_s2],        
        price: 240,
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Pharetra pulvinar lacus semper phasellus; dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien. Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Pharetra pulvinar lacus semper phasellus; dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien.Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Pharetra pulvinar lacus semper phasellus; dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien. dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien.Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Pharetra pulvinar lacus semper phasellus; dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien.dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien.Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Pharetra pulvinar lacus semper phasellus; dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien.`
    },
    {
        title: "Halloween Double",
        image: halloween_f1,
        modal_images: [halloween_f1, halloween_f2],
        price: 240,
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Pharetra pulvinar lacus semper phasellus; dui est fringilla imperdiet. Cursus sapien blandit consequat laoreet at pretium.
        Risus vehicula per dictumst fermentum tortor sapien.`
    },
]
export default CakeItems;