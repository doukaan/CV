import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
function App() {
  return (
      <div className="bg-[#202020]">
        <div  className="">
          <Navbar />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Skills">
          <Skills />
        </div >
          <div id="Footer">
              <Footer />
          </div>


      </div>
  );
}

export default App;
