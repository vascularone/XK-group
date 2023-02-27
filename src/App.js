import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Landing from './components/pages/landingpage';
import Checkout from './components/pages/checkoutpage';
import Shipping from './components/pages/shippingpage';
import Thankyou from './components/pages/thankyoupage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exaxt path='/' element={<Landing />} />
        <Route path='/shippingpage' element={<Shipping />} />
        <Route path='/checkoutpage' element={<Checkout />} />
        <Route path='/thankyoupage' element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
