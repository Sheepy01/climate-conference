import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Themes from './components/Themes';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import PlaceholderPage from './components/PlaceholderPage';
import RegistrationPage from './components/RegistrationPage';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import InvitedSpeakers from './components/InvitedSpeakers';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Themes />
              <Speakers />
              <Sponsors />
            </>
          } />
          {/* Add routes for all dropdown menu items */}
          <Route path="/call-for-paper" element={<PlaceholderPage title="Call for Paper" />} />
          <Route path="/call-for-poster" element={<PlaceholderPage title="Call for Poster Presentation" />} />
          <Route path="/guidelines-paper" element={<PlaceholderPage title="Guidelines for Paper Submission" />} />
          <Route path="/presentation-guidelines" element={<PlaceholderPage title="Presentation Guidelines" />} />
          <Route path="/poster-guidelines" element={<PlaceholderPage title="Guidelines for Poster Session" />} />
          <Route path="/registration" element={<RegistrationPage title="Registration" />} />
          <Route path="/program-flyer" element={<PlaceholderPage title="Program Flyer" />} />
          <Route path="/technical-program" element={<PlaceholderPage title="Technical Program" />} />
          <Route path="/proceedings" element={<PlaceholderPage title="Conference Proceedings" />} />
          {/* <Route path="/keynote-speakers" element={<PlaceholderPage title="Keynote Speakers" />} /> */}
          <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
          <Route path="/invited-speakers" element={<InvitedSpeakers />} />
          <Route path="/special-sessions" element={<PlaceholderPage title="Special Sessions" />} />
          <Route path="/travel-venue" element={<PlaceholderPage title="Travel and Venue" />} />
          <Route path="/sponsor-adri-csec" element={<PlaceholderPage title="ADRI CSEC" />} />
          <Route path="/sponsor-ims" element={<PlaceholderPage title="Indian Meteorogical Society" />} />
          <Route path="/sponsor-mcs" element={<PlaceholderPage title="Mahavir Cancer Sansthan" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;