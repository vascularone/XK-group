import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Landing from './components/pages/landingpage';
import Checkout from './components/pages/checkoutpage';
import Shampoo from "./components/pages/shampoo";
import Spray from './components/pages/spray';
import Conditioner from './components/pages/conditioner';
import Thankyou from './components/pages/thankyoupage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exaxt path='/' element={<Landing />} />
        <Route path='/shampoo' element={<Shampoo />} />
        <Route path='/conditioner' element={<Conditioner />} />
        <Route path='/spray' element={<Spray />} />
      </Routes>
    </Router>
  );
}

export default App;
