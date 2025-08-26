import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Themes from './components/Themes';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Themes />
      <Speakers />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;