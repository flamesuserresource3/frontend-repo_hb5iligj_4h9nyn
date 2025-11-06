import React from 'react';
import Hero from './components/Hero';
import Numbers from './components/Numbers';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Numbers />
      <Amenities />
      <Pricing />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
