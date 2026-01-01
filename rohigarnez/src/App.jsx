import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Proyects from "./pages/Proyects";
import ProyectsDetails from "./pages/ProyectsDetails";
import Services from "./pages/Services";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/servicios' element={<Services />} />
                <Route path='/servicios/:service' element={<Services />} />
                <Route path='/proyectos' element={<Proyects />} />
                <Route path='/proyectos/:id' element={<ProyectsDetails />} />
                <Route path='/contacto' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}
