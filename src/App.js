import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Forums from './pages/Forums';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/forums" element={<Forums />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
