import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout'
import OrderHistory from './Components/OrderHistory';
import Home from './Components/Home';
import NewOrder from './Components/NewOrder';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-order" element={<NewOrder />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
