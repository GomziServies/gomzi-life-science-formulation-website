import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Ingredients from './pages/Ingredients';
import OurExpertise from './pages/OurExpertise';
import RDFormulation from './pages/RDFormulation';
import Applications from './pages/Applications';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-expertise" element={<OurExpertise />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/rd-formulation" element={<RDFormulation />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </>
  );
}
