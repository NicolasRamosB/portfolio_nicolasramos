
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';


import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

import Particles from './components/Particles/Particles';


function App() {

  return (

    <div className="App">


      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>


        <Particles/>

      </BrowserRouter>


    </div>


  );
}

export default App;
