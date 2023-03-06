import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Landing from './components/pages/landingpage';
import Checkout from './components/pages/checkoutpage';
import Shampoo from "./components/pages/shampoo";
import Spray from './components/pages/spray';
import Conditioner from './components/pages/conditioner';
import Thankyou from './components/pages/thankyoupage';
import Shipping from './components/pages/shippingpage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exaxt path='/' element={<Landing />} />
        <Route path='/shampoo' element={<Shampoo />} />
        <Route path='/conditioner' element={<Conditioner />} />
        <Route path='/spray' element={<Spray />} />
        <Route path='/shippingpage' element={<Shipping />} />
        <Route path='/checkoutpage' element={<Checkout />} />
        <Route path='/thankyoupage' element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
