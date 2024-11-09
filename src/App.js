import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Contact from './components/Contact';

export const navItems = [

  { label: "Features", href: "#"},
  { label: "Explore", href: "#"},
  { label: "contact", href: "#"},


];

const App = () => {
  return (
    <div>
     
     <Navbar />
     <div className="max-w-7xl mx-auto pt-20 px-6" >
     <Hero/>
     </div>
     
     <Info/>
      
     <div className="max-w-7xl mx-auto pt-20 px-6" >
      <Contact/>
     </div>
  

      
      <footer className="text-center py-3">
        &copy; {new Date().getFullYear()} HEPHAESTUS. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
