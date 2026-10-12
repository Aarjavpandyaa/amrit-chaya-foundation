import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pooja from './pages/Pooja';
import PoojaDetails from './pages/PoojaDetails';
import Tours from './pages/Tours';
import Goshala from './pages/Goshala';
import Donate from './pages/Donate';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pooja" element={<Pooja />} />
        <Route path="/pooja/:id" element={<PoojaDetails />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/goshala" element={<Goshala />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
