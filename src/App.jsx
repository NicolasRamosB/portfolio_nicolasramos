
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';


import Portfolio from './components/Portfolio/Portfolio';

import Contact from './components/Contact/Contact';

import Particles from './components/Particles/Particles';
import ButtonTraslate from './components/ButtonTraslate/ButtonTraslate';



import "primereact/resources/themes/mdc-dark-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
 

function App() {

  

  return (

    <div className="App">


      <BrowserRouter>
      
      <ButtonTraslate/>
        <Navbar />

        <Routes>

          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>


        <Particles/>

      </BrowserRouter>


    </div>


  );
}

export default App;
