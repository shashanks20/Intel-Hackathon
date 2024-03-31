import React from 'react';
import Navbar from './navbar.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import State from './state.jsx';
import Footer from './footer.jsx';
import Substation from './substation.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state" element={<State />} />
          <Route path="/substation/:state" element={<Substation />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
