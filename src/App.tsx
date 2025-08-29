import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Price from './pages/Price/Price';

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/price" element={<Layout><Price /></Layout>} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
);

export default App;