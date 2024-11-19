import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Landing from "./components/landingPage/Landing.jsx";
import About from "./components/about/About.jsx";
import Cakes from "./components/cakes/Cakes.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
