import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Importa otras páginas si las tienes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega rutas para otras páginas */}
      </Routes>
    </Router>
  );
};

export default App;
